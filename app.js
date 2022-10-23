// const fs = require("fs").promises;
// const text = "here is some text";

// fs.writeFile("node-message.txt", text)
//   .then((result) => {
//     console.log("saved file");
//   })
//   .catch((err) => console.log(err));

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("hello world response - node");
// });
// server.listen(3000);

import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(async (ctx) => {
  ctx.response.body = "Hello world";
});

await app.listen({ port: 8000 });
