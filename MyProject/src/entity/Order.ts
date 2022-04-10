import { Entity, ManyToOne, OneToMany, Column, JoinTable } from "typeorm";
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

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  public orderProducts!: OrderProduct[];
};

// @ManyToOne(() => User, (user) => user.orders, { nullable: false })
// user: User;

//   @ManyToMany(() => Product, (product)=> product.orders)
//   @JoinTable()
//   products: Product[];
