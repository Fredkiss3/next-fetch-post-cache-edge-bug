import Link from "next/link";
import { increment } from "./_action";
import { getCounter } from "./utils";

export default function Page() {
  const counter = getCounter();
  return (
    <main>
      <h1>Path: / (home) </h1>
      <h1>Counter: {counter}</h1>

      <form action={increment}>
        <button>Increment counter</button>
      </form>

      <br />
      <Link href={"/redirect"}>Go to `/redirect`</Link>
    </main>
  );
}
