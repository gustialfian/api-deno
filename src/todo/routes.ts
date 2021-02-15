import { Router, RouterContext } from "../deps.ts";
import { Todo } from "./interface.ts";
import { find, findById, insert, remove, update } from "./repository.ts";

const todoRoute = new Router();

todoRoute.get("/", async (ctx: RouterContext) => {
  const data = await find();
  ctx.response.body = {
    status: "success",
    data,
  };
});

todoRoute.get("/:id", async (ctx: RouterContext) => {
  const id: string = ctx.params.id!;
  const data = await findById(id);
  ctx.response.body = {
    status: "success",
    data,
  };
});

todoRoute.post("/", async (ctx: RouterContext) => {
  const todo = await ctx.request.body({ type: "json" }).value;
  const data = await insert(todo);
  ctx.response.body = {
    status: "success",
    data,
  };
});

todoRoute.put("/:id", async (ctx: RouterContext) => {
  const id: string = ctx.params.id!;

  const todo: Todo = await ctx.request.body({ type: "json" }).value;

  const data = await update(id, todo);

  ctx.response.body = {
    status: "success",
    data,
  };
});

todoRoute.delete("/:id", async (ctx: RouterContext) => {
  const id: string = ctx.params.id!;
  const data = await remove(id);
  ctx.response.body = {
    status: "success",
    data,
  };
});

export { todoRoute };
