# deno-simple-api

## Run
```
deno run --allow-net src/mod.ts

docker run --name db --rm \
  -e POSTGRES_PASSWORD=sandbox \
  -e POSTGRES_USER=sandbox \
  -e POSTGRES_DB=sandbox \
  -p 6543:5432 \
  postgres:13-alpine
```