import { Application } from "https://deno.land/x/oak/mod.ts";
import todoRoutes from "./routes/todos.ts";
import { connect } from "./helpers/db_client.ts";

connect();

const app = new Application();

//oak sends a response automatically
//so waiting for next() will take into account the request.body
//set in the handler functions further down
app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  await next();
});

app.use(todoRoutes.routes());
app.use(todoRoutes.allowedMethods());

await app.listen({ port: 8000 });
