import * as React from "react";
import { getCounter } from "./utils";

export const metadata = {
  title: "Next redirect server actions bug",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const counter = getCounter();
  return (
    <html>
      <head />
      <body>
        <h2>ROOT LAYOUT (counter from root = {counter})</h2>
        {children}
      </body>
    </html>
  );
}
