// app/api/login/route.ts
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  console.log("Login attempt:", { email, password });
  // Replace with your own DB check
  const user = { id: 1, name: "Sohag", email: "test@example.com" };

  if (email === "test@example.com" && password === "1234") {
    const token = await jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
    const cookieStore = await cookies(); // ✅ await resolves the Promise
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email },
    });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
