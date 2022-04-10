import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { Category } from "./Category";
import { EmBase } from "./EmBase";
import { OrderProduct } from "./OrderProduct";


@Entity()
export class Product extends EmBase {
  @Column()
  name: string;

  @Column()
  description: string;


  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  isPopular: boolean;

  @ManyToOne(() => Category, (category) => category.products, { nullable: false })
  category: Category;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  public orderProducts!: OrderProduct[];
}
