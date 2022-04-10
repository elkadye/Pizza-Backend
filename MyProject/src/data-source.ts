import "reflect-metadata";
import { DataSource } from "typeorm";

import { Category } from "./entity/Category";
import { Order } from "./entity/Order";
import { OrderProduct } from "./entity/OrderProduct";
import { Product } from "./entity/Product";
// import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db.shtexhwnphdtecphykje.supabase.co",
  port: 6543,
  username: "postgres",
  password: "9mX8!.r2N48ZE!z",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Category, Order, OrderProduct, Product],
  migrations: [],
  subscribers: [],
});
