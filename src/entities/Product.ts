import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, JoinColumn, CreateDateColumn, ManyToOne, Check, OneToMany } from "typeorm";
import { Category } from "./Category";
import { Discount } from "./Discount";
import { ProductColor } from "./ProductColor";

@Entity()
@Check(`"modifiedDate" >= "createdDate"`)
@Check(`"inputPrice" >=0`)
@Check(`"sellingPrice" >=0`)
export class Product {
    @PrimaryGeneratedColumn()
    productID: number

    @Column("nvarchar")
    productName: string

    @Column({length: 20})
    productCode: string

    @Column({ type: "nvarchar", nullable: true })
    description: string

    @Column({length: 20})
    sex: string

    @Column("decimal")
    inputPrice: number

    @Column("decimal")
    sellingPrice: number

    @ManyToOne(() => Discount, (discount) => discount.products)
    @JoinColumn({name: "discountID"})
    discount: Discount

    @Column("date")
    createdDate: Date

    @Column("date")
    modifiedDate: Date

    @Column({ type: "ntext", nullable: true })
    feature: string

    @Column({ type: "nvarchar", nullable: true })
    productLine: string

    @ManyToMany(() => Category, (category) => category.products)
    @JoinTable({
        name: "product_category", // Tên bảng giao nhóm
        joinColumn: {
          name: "productID", // Tên cột trong bảng giao nhóm
          referencedColumnName: "productID", // Tên cột trong bảng products
        },
        inverseJoinColumn: {
          name: "categoryID", // Tên cột trong bảng giao nhóm khác
          referencedColumnName: "categoryID", // Tên cột trong bảng category
        },
      })
    categories: Category[]

    @OneToMany(() => ProductColor, productColor => productColor.product)
    productColors: ProductColor[]
}