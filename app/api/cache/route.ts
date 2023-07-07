import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { path } = await req.json();
  return NextResponse.json(
    {
      date: new Date(),
      path,
    },
    {
      status: 200,
    }
  );
}
