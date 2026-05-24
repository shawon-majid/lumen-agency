import { ImageResponse } from "next/og";

export const alt = "Define AI — We define AI for your business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #FBF3DE 0%, #F8C892 45%, #F19184 100%)",
          color: "#2A1F18",
          fontFamily: "serif",
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(42, 31, 24, 0.7)",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 32, color: "#C0494A" }}>✺</span>
            <span>Define AI · Studio</span>
          </div>
          <span>est. 2026 · booking Q3</span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: 12 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.0,
              letterSpacing: -3,
              fontWeight: 300,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Define what AI</span>
            <span style={{ fontStyle: "italic" }}>does for you.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              lineHeight: 1.45,
              maxWidth: 820,
              color: "rgba(42, 31, 24, 0.78)",
              fontFamily: "sans-serif",
            }}
          >
            A senior advisory studio for AI. We figure out what AI should
            actually do for your business — then build it.
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(42, 31, 24, 0.7)",
            fontFamily: "monospace",
          }}
        >
          <span>defineai.studio</span>
          <span>shawon.majid@gmail.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
