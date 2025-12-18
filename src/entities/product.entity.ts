import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export class Rating {
  @Column({ type: "decimal", precision: 3, scale: 2, default: 0 })
  rate!: number;

  @Column({ type: "int", default: 0 })
  count!: number;
}

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  category!: string;

  @Column({ length: 100 })
  title!: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price!: number;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "varchar", length: 255 })
  image!: string;

  @Column(() => Rating)
  rating?: Rating;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
