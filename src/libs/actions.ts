"use server";

import { calc } from "@/libs/calc";
import type { Version } from "@/types";

export async function calculate(_: unknown, formData: FormData) {
  const capital = Number(formData.get("capital"));
  const days = Number(formData.get("days"));
  const version = formData.get("version") as Version;

  return {
    result: calc(capital, days, version), // call the calculation function and pass the parameters.
    version,
  };
}
