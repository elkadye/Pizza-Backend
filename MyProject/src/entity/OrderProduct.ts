
import { Entity, Column, ManyToOne } from "typeorm";
import { EmBase } from "./EmBase";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderProduct extends EmBase {
  @Column()
  qty: number;

  @ManyToOne(() => Product, (product) => product.orderProducts)
  product: Product;

  @ManyToOne(() => Order, (order) => order.orderProducts)
  order: Order;
}