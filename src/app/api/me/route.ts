import { NextResponse } from "next/server";

export async function GET(req: Request) {   
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SSO_URL}/me`, {
      credentials: "include",
      headers: {
        Cookie: req.headers.get("cookie") || "",
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch user" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
