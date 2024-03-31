import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}category`);

    if (!res.ok) {
      return new NextResponse("Something went wrong", {
        status: 500,
      });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}
