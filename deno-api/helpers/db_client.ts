import { Database, MongoClient } from "https://deno.land/x/mongo/mod.ts";

let db: Database;

export async function connect() {
  const client = new MongoClient();
  // await client.connect(
  //   "mongodb+srv://Admin:Admin@cluster0.uifnujc.mongodb.net/?retryWrites=true&w=majority"
  // );

  await client.connect({
    db: "todos",
    tls: true,
    servers: [
      {
        host: "ac-rpvdvpx-shard-00-00.uifnujc.mongodb.net",
        port: 27017,
      },
      {
        host: "ac-rpvdvpx-shard-00-01.uifnujc.mongodb.net",
        port: 27017,
      },
      {
        host: "ac-rpvdvpx-shard-00-02.uifnujc.mongodb.net",
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
