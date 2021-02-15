import { client } from "../database.ts";
import { Todo } from "./interface.ts";


export async function find() {
  const data = await client.queryObject(`select * from todo`);
  return data.rows
}

export async function findById(id: string) {
  const data = await client.queryObject(`select * from todo where id = ${id}`);
  return data.rows[0]
}

export async function insert(todo: Todo) {
  const data = await client.queryObject(`
    insert into todo (name, status) values ('${todo.name}', '${todo.status}')
    returning *
  `);
  return data.rows[0]
}

export async function update(id: string, todo: Todo) {
  const data = await client.queryObject(`
    update todo 
    set name = '${todo.name}'
    , status = '${todo.status}'
      where id = ${id}
      returning *
  `);
  return data.rows[0]
}

export async function remove(id: string) {
  const data = await client.queryObject(
    `delete from todo where id = ${id} returning *`,
  );
  return data.rows[0]
}