import * as React from "react";
import { getCookieCounter, getFileCounter } from "./_action";

export const metadata = {
  title: "Next redirect server actions bug",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieCounter = await getCookieCounter();
  const fileCounter = await getFileCounter();
  return (
    <html>
      <head />
      <body>
        <h2>
          ROOT LAYOUT (cookie = {cookieCounter}, file = {fileCounter})
        </h2>
        {children}
      </body>
    </html>
  );
}
