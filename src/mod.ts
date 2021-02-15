import { Application } from "./deps.ts";
import { config } from "./config.ts";

import { todoRoute } from "./todo/routes.ts";

const app = new Application();

app.use(todoRoute.prefix("/todo").routes());
app.use(todoRoute.allowedMethods());

console.log(`listening on http://localhost:${config.port}`);
await app.listen({ port: config.port });
