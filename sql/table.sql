create table if not exists todo (
  id serial primary key,
  name varchar(255),
  status varchar(10),
  created_at timestamp default now()
);