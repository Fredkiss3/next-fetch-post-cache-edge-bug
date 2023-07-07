export const fetchCache = "force-no-store";

export default async function Page() {
  const cache = await fetch("http://127.0.0.1:3000/api/cache", {
    method: "POST",
    body: JSON.stringify({ path: "/force-no-store" }),
  }).then((r) => r.json());
  const noCache = await fetch("http://127.0.0.1:3000/api/no-cache", {
    method: "POST",
    body: JSON.stringify({ path: "/force-no-store" }),
  }).then((r) => r.json());

  console.log({
    cache,
    noCache,
  });

  return (
    <main>
      <h1>Path: / </h1>

      <h2>POST /api/cache : (should not be cached) </h2>
      <pre>{JSON.stringify(cache, null, 2)}</pre>

      <h2>POST /api/no-cache : (should not be cached) </h2>
      <pre>{JSON.stringify(noCache, null, 2)}</pre>
    </main>
  );
}
