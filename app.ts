// const encoder = new TextEncoder();
// const text = "here is a message";
// const data = encoder.encode(text);

// Deno.writeFile("message.txt", data)
//   .then((result) => console.log("wrote file: ", result))
//   .catch((err) => console.log(err));

import { serve } from "https://deno.land/std/http/server.ts";
const reqHandler = (_req: any) => {
  console.log("received request");
  return new Response("hello world response");
};
serve(reqHandler, { port: 3000 });
