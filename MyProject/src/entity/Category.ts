import { Entity, Column, OneToMany } from "typeorm";
import { EmBase } from "./EmBase";
import { Product } from "./Product";

@Entity()
export class Category extends EmBase {
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
