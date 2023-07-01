import { cookies } from "next/headers";

export function getCounter() {
  return Number.parseInt(cookies().get("_counter")?.value ?? "0");
}
