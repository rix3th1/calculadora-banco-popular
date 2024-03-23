import i from "@/interests/index.json";
import { NextResponse } from "next/server";

export function GET(
  _: Request,
  {
    params,
  }: {
    params: {
      v: "v1" | "v2";
    };
  }
) {
  return NextResponse.json(i[params.v]);
}
