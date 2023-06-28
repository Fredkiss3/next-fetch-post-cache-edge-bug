import * as React from "react";

export default function RootLayout({
  parallel,
}: {
  parallel: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <h2>ROOT LAYOUT</h2>
        {parallel}
      </body>
    </html>
  );
}
