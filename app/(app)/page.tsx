import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <h1>Path: / </h1>

      <br />
      <Link href={"/other"}>Go to `/target`</Link>
    </main>
  );
}
