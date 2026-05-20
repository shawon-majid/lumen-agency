"use client";

import { useEffect, useRef } from "react";

const VERT = /* glsl */ `#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAG = /* glsl */ `#version 300 es
precision highp float;
out vec4 outColor;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_mouse;
uniform float u_intensity;
uniform vec3  u_base;
uniform vec3  u_mid;
uniform vec3  u_high;
uniform vec3  u_accent;

/* ── 2D simplex noise (Ian McEwan / Stefan Gustavson) ───────── */
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                     -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                       + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0),
                          dot(x12.xy,x12.xy),
                          dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
  float v = 0.0; float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * snoise(p);
    p *= 2.0; a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * 3.0;

  float t = u_time * 0.07;

  /* Cursor radial pull — subtle warm displacement */
  vec2 mouseUv = u_mouse / u_resolution;
  mouseUv.y = 1.0 - mouseUv.y;
  float dMouse = distance(uv, mouseUv);
  float mouseFalloff = exp(-dMouse * 5.0) * 0.5 * u_intensity;
  vec2 dir = normalize((uv - mouseUv) + 1e-5);
  p += dir * mouseFalloff;

  /* Domain-warped fbm — two passes (caustics-like) */
  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) + t * 1.1));
  vec2 r = vec2(fbm(p + 1.8 * q + vec2(1.7, 9.2) + t * 1.3),
                fbm(p + 1.8 * q + vec2(8.3, 2.8) + t * 1.5));
  float f = fbm(p + 2.2 * r);

  /* Caustic ridges */
  float caustic = pow(0.5 + 0.5 * f, 1.8);
  caustic = smoothstep(0.22, 0.94, caustic);

  /* Palette comes from React via uniforms (warm or cool) */
  vec3 col = mix(u_base, u_mid, smoothstep(-0.2, 0.6, f));
  col = mix(col, u_high,   smoothstep(0.30, 0.90, caustic));
  col = mix(col, u_accent, smoothstep(0.78, 1.00, caustic) * 0.55);

  /* Vignette toward base for a settled, in-vessel feel */
  float vig = smoothstep(1.15, 0.30, length(uv - 0.5));
  col = mix(u_base, col, vig * 0.85 + 0.15);

  /* Slight cool falloff in the top-right to avoid uniform warmth */
  col *= 1.0 - 0.05 * smoothstep(0.4, 1.2, uv.x + (1.0 - uv.y));

  /* Tiny grain to fight 8-bit banding */
  float grain = (fract(sin(dot(uv * u_resolution,
                                vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.012;
  col += grain;

  outColor = vec4(col, 1.0);
}`;

type PaletteName = "warm" | "cool";

interface Palette {
  base: [number, number, number];
  mid: [number, number, number];
  high: [number, number, number];
  accent: [number, number, number];
}

const PALETTES: Record<PaletteName, Palette> = {
  // Warm — sunset on a cream pool. Matches the v1 OKLCH tokens (canvas, amber, peach, magenta).
  warm: {
    base: [0.965, 0.945, 0.905],
    mid: [0.995, 0.860, 0.620],
    high: [0.985, 0.760, 0.620],
    accent: [0.945, 0.610, 0.680],
  },
  // Cool — clear water, sky reflections. Tuned to read as a pool at noon.
  cool: {
    base: [0.960, 0.978, 0.985],
    mid: [0.660, 0.890, 0.945],
    high: [0.430, 0.795, 0.890],
    accent: [0.965, 0.580, 0.545],
  },
};

interface Props {
  intensity?: number;
  className?: string;
  /** Manual palette override. If omitted, the canvas auto-detects from the
   *  nearest `[data-theme]` ancestor (`v2` → cool, anything else → warm). */
  palette?: PaletteName;
}

export function WaterCanvas({ intensity = 1.0, className, palette }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const gl = canvas.getContext("webgl2", {
      antialias: false,
      alpha: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
    }) as WebGL2RenderingContext | null;
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error("Shader compile failed:", gl.getShaderInfoLog(sh));
      }
      return sh;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("Program link failed:", gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uIntensity = gl.getUniformLocation(prog, "u_intensity");
    const uBase = gl.getUniformLocation(prog, "u_base");
    const uMid = gl.getUniformLocation(prog, "u_mid");
    const uHigh = gl.getUniformLocation(prog, "u_high");
    const uAccent = gl.getUniformLocation(prog, "u_accent");

    const detectedTheme = canvas.closest("[data-theme]")?.getAttribute("data-theme");
    const resolvedPalette: PaletteName =
      palette ?? (detectedTheme === "v2" ? "cool" : "warm");
    const pal = PALETTES[resolvedPalette];
    gl.uniform3f(uBase, ...pal.base);
    gl.uniform3f(uMid, ...pal.mid);
    gl.uniform3f(uHigh, ...pal.high);
    gl.uniform3f(uAccent, ...pal.accent);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouse.ty = (e.clientY - rect.top) * (canvas.height / rect.height);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      // Half-resolution render for performance; CSS will up-scale smoothly
      const scale = 0.6;
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr * scale));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr * scale));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      mouse.x = w * 0.5;
      mouse.y = h * 0.5;
      mouse.tx = mouse.x;
      mouse.ty = mouse.y;
    };
    resize();
    window.addEventListener("resize", resize);

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: "120px" }
    );
    io.observe(canvas);

    let raf = 0;
    const start = performance.now();
    let lastFrame = 0;
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      // ~60fps cap (works around displays where rAF fires > 60Hz)
      if (now - lastFrame < 15.5) return;
      lastFrame = now;

      if (!visible) return;

      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      const t = reduced ? 0 : (now - start) / 1000;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uIntensity, intensity);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, [intensity, palette]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "absolute inset-0 h-full w-full"}
      aria-hidden
    />
  );
}
