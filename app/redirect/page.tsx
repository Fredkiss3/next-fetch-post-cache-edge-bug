import Link from "next/link";
import { getCounter } from "../utils";

export default function Page() {
  const counter = getCounter();
  return (
    <main>
      <h1>Path: /redirect </h1>
      <h1>Counter: {counter}</h1>
      <br />
      <Link href={"/"}>Go home</Link>
    </main>
  );
}
