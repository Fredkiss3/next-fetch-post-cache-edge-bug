import * as React from "react";

export const metadata = {
  title: "Fetch CACHE - edge runtime - BUG - Next.js",
};

// export const runtime = "edge";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <h2>ROOT LAYOUT</h2>
        {children}
      </body>
    </html>
  );
}
