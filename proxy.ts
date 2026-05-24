import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import crypto from "node:crypto";

const ADMIN_COOKIE = "define_ai_admin";

function expectedCookieValue(): string | null {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return null;
  return crypto.createHmac("sha256", pwd).update("v1").digest("hex");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /admin/login is the only public admin page
  if (pathname === "/admin/login") return NextResponse.next();

  const expected = expectedCookieValue();
  if (!expected) {
    // Admin not configured — block all admin routes outright
    return NextResponse.redirect(new URL("/admin/login?reason=disabled", request.url));
  }

  const cookie = request.cookies.get(ADMIN_COOKIE);
  if (!cookie || cookie.value !== expected) {
    const url = new URL("/admin/login", request.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
