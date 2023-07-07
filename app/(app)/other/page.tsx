import { dbClient } from "~/db";

export default async function Page() {
  const todos = await fetch(
    "https://jsonplaceholder.typicode.com/todos/3"
  ).then((response) => response.json());

  const inserted = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());

  const rs = await dbClient.execute("SELECT * FROM contacts LIMIT 2");

  return (
    <div>
      <h1>GET /todos/3 (cached)</h1>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <h2>POST /todos : (should not be cached) </h2>
      <pre>{JSON.stringify(inserted, null, 2)}</pre>
      <h2>LIBSQL : (should not be cached) </h2>
      <pre>{JSON.stringify(rs.rows, null, 2)}</pre>
      {/* <h2>DRIZZLE : </h2>
      <pre>{JSON.stringify(rsDrzl, null, 2)}</pre> */}
    </div>
  );
}
