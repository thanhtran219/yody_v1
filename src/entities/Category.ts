import "reflect-metadata";
import { Entity, Check, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, CreateDateColumn, JoinColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
@Check(`"modifiedDate" >= "createdDate"`)
export class Category {
    @PrimaryGeneratedColumn()
    categoryID: number

    @Column("nvarchar")
    categoryName: string

    @Column("date")
    createdDate: Date

    @Column("date")
    modifiedDate: Date

    @ManyToOne(() => Category, (category) => category.children)
    @JoinColumn({name: "parentCategoryID"})
    parent: Category

    @OneToMany(() => Category, (category) => category.parent)
    children: Category[]

    @ManyToMany(() => Product, (product) => product.categories)
    products: Product[]
}