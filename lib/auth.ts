import "server-only";
import { cookies } from "next/headers";
import crypto from "node:crypto";

export const ADMIN_COOKIE = "define_ai_admin";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function getSecret(): string {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) {
    throw new Error(
      "ADMIN_PASSWORD env var not set — admin authoring is disabled until you set it."
    );
  }
  return pwd;
}

export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function checkPassword(input: string): boolean {
  const expected = getSecret();
  // Constant-time compare to avoid timing leaks
  const a = Buffer.from(input, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

/** Cookie value is HMAC(ADMIN_PASSWORD, "v1") — opaque to clients, deterministic
 *  per password so the proxy can verify without a session store. */
export function cookieValue(): string {
  return crypto
    .createHmac("sha256", getSecret())
    .update("v1")
    .digest("hex");
}

export async function isAdmin(): Promise<boolean> {
  if (!adminConfigured()) return false;
  const jar = await cookies();
  const c = jar.get(ADMIN_COOKIE);
  if (!c) return false;
  try {
    return c.value === cookieValue();
  } catch {
    return false;
  }
}

export const cookieAttrs = {
  name: ADMIN_COOKIE,
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: COOKIE_MAX_AGE,
};
