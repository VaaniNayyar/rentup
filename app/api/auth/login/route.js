import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const res = await fetch("https://rentup-backend-clean.onrender.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });

  } catch (err) {
    console.error("API Route Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
