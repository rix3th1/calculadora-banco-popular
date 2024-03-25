import i from "@/libs/interests.json";
import type { Version } from "@/types";
import { NextResponse } from "next/server";

export function GET(
  _: Request,
  {
    params,
  }: {
    params: {
      v: Version;
    };
  }
) {
  return NextResponse.json(i[params.v]);
}
