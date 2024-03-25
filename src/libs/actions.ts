"use server";

import { calc } from "@/libs/calc";
import type { Version } from "@/types";

export async function calculate(_: unknown, formData: FormData) {
  const capital = Number(formData.get("capital"));
  const days = Number(formData.get("days"));
  const version = formData.get("version") as Version;

  return calc(capital, days, version); // return the result of the calculation function to the client.
}
