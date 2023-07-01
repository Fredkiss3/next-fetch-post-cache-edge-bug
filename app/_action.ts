"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCounter } from "./utils";

export async function increment(fd: FormData) {
  const counter = getCounter();

  cookies().set("_counter", (counter + 1).toString());
  redirect("/target");
}
