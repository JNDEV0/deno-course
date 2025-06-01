import { Database, MongoClient } from "https://deno.land/x/mongo/mod.ts";

let db: Database;

export async function connect() {
  const client = new MongoClient();
  // await client.connect(
  //   "x"
  // );

  await client.connect({
    db: "todos",
    tls: true,
    servers: [
      {
        host: "x",
        port: 27017,
      },
      {
        host: "x",
        port: 27017,
      },
      {
        host: "x",
        port: 27017,
      },
    ],
    credential: {
      username: "Admin",
      password: "Admin",
      db: "todos",
      mechanism: "SCRAM-SHA-1",
    },
  });
  db = client.database("todos");
}

export function getDb() {
  return db;
}
