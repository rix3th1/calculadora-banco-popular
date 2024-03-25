"use server";

import { calc } from "@/libs/calc";
import type { Version } from "@/types";

export async function calculate(_currentState: unknown, formData: FormData) {
  const result = calc(
    Number(formData.get("capital")),
    Number(formData.get("days")),
    formData.get("version") as Version
  );

  return result;
}
