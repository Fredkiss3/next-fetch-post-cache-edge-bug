import Link from "next/link";

export default async function Page() {
  const todos = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((response) => response.json());

  return (
    <div>
      <h2>GET /todos/1 (cached)</h2>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <Link href={`/working/other`}>Go to /Other</Link>
    </div>
  );
}
