import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminConfigured, checkPassword, cookieAttrs, cookieValue } from "@/lib/auth";

export async function POST(request: Request) {
  if (!adminConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Admin not configured. Set ADMIN_PASSWORD." },
      { status: 503 }
    );
  }

  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const password = body?.password;
  if (typeof password !== "string" || password.length < 1) {
    return NextResponse.json({ ok: false, error: "Password required" }, { status: 400 });
  }

  if (!checkPassword(password)) {
    return NextResponse.json({ ok: false, error: "Incorrect password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    ...cookieAttrs,
    name: ADMIN_COOKIE,
    value: cookieValue(),
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    ...cookieAttrs,
    name: ADMIN_COOKIE,
    value: "",
    maxAge: 0,
  });
  return response;
}
