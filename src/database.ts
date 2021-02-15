import { Client } from "./deps.ts";

import { config } from "./config.ts";

const client = new Client(config.db);
await client.connect();

export { client };
