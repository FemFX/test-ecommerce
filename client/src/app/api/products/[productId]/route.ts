import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}product/${params.productId}`
    );

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
