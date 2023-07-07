// export const fetchCache = "force-no-store";

export default async function Layout({
  children,
  parallel,
}: {
  children: React.ReactNode;
  parallel: React.ReactNode;
}) {
  return (
    <main>
      <h1>Children</h1>
      {children}

      <h1>Parallel </h1>
      {parallel}
    </main>
  );
}
