import { NextResponse } from "next/server";

const ADMIN_PASSWORD = "city7266";

export async function POST(request) {
  const body = await request.json();
  const { password } = body;

  if (password === ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("thrifted_admin", "true", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ success: false, error: "Incorrect password" }, { status: 401 });
}