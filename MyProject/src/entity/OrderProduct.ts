
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinTable } from "typeorm";
import { EmBase } from "./EmBase";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderProduct extends EmBase {
  @Column()
  public qty: number;

  @Column()
  public status: string;

  @ManyToOne(() => Product, (product) => product.orderProducts)
  public product: Product;

  @ManyToOne(() => Order, (order) => order.orderProducts)
  public order: Order;
}