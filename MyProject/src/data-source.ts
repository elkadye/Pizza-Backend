import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Order } from "./entity/Order";
import { Product } from "./entity/Product";

import { OrderProduct } from "./entity/OrderProduct";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db.shtexhwnphdtecphykje.supabase.co",
  port: 6543,
  username: "postgres",
  password: "9mX8!.r2N48ZE!z",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User,Order,Product,OrderProduct],
  migrations: [],
  subscribers: [],
});
