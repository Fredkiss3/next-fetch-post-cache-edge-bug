import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/http";

import { type InferModel, sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  createdAt: integer("createdAt", { mode: "timestamp" })
    .default(sql`(strftime('%s', 'now'))`)
    .notNull(),
  first: text("first"),
  last: text("last"),
  favorite: integer("favorite", { mode: "boolean" }).default(false).notNull(),
  avatar: text("avatar"),
  twitter: text("twitter"),
  notes: text("notes"),
});

export type Contact = InferModel<typeof contacts>;

const config = {
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_TOKEN,
};
export const dbClient = createClient(config);

export const drzl = drizzle(dbClient, {
  logger: true,
  schema: {
    contacts,
  },
});
