import { dbClient } from "~/db";

export default async function Page() {
  const todos = await fetch(
    "https://jsonplaceholder.typicode.com/todos/2"
  ).then((response) => response.json());
  const rs = await dbClient.execute("SELECT * FROM contacts WHERE id = 41");

  return (
    <div>
      <h2>GET /todos/2 (cached)</h2>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <h2>DB (should not be cached)</h2>
      <pre>{JSON.stringify(rs.rows, null, 2)}</pre>
    </div>
  );
}
