import { Entity, ManyToOne,OneToMany, ManyToMany, JoinTable } from "typeorm";
import { EmBase } from "./EmBase";
import { User } from "./User";

import { OrderProduct } from "./OrderProduct";

@Entity()
export class Order extends EmBase {
  
  @ManyToOne(() => User, (user) => user.orders, { nullable: false })
  user: User;

  //   @ManyToMany(() => Product, (product)=> product.orders)
  //   @JoinTable()
  //   products: Product[];

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  public orderProducts!: OrderProduct[];
}