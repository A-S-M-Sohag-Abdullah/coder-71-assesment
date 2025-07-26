// /app/api/me/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    return NextResponse.json({ user: decoded }, { status: 200 });
  } catch {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
