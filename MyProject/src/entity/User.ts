import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { EmBase } from "./EmBase"
import { Order } from "./Order";

@Entity()
export class User extends EmBase {
  @Column()
  name: string;

  @Column()
  mobile: number;

  @Column()
  address: string;

  @Column()
  city: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];


}
