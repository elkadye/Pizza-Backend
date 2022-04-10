import { Entity, Column,OneToMany } from "typeorm";
import { EmBase } from "./EmBase";
// import { User } from "./User";

import { OrderProduct } from "./OrderProduct";

@Entity()
export class Order extends EmBase {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  mobile: number;

  @Column()
  address: string;

  @Column()
  city: string;
  @Column({default:false})
  completed: boolean;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
   orderProducts: OrderProduct[];
}
