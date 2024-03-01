import "reflect-metadata";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, Check, ManyToOne} from "typeorm";
import {Product} from "./Product";
import { Order } from "./Order";

@Entity()
@Check(`"modifiedDate" >= "createdDate"`)
@Check(`"endDate" >= "startDate"`)
@Check(`"inventoryQuantity" >= 0`)
@Check(`"discountRate" >= 0 AND "discountRate" <= 1.00`)
export class Discount {
    @PrimaryGeneratedColumn()
    discountID: number

    @Column()
    discountCode: string

    @Column("nvarchar")
    discountName: string

    @Column({ type: "decimal", precision: 3, scale: 2 })
    discountRate: number

    @Column({ type: "nvarchar", nullable: true })
    description: string

    @Column("date")
    startDate: Date

    @Column("date")
    endDate: Date

    @Column()
    inventoryQuantity: number

    @Column("date")
    createdDate: Date

    @Column("date")
    modifiedDate: Date

    @OneToMany(() => Product, (product) => product.discount)
    products: Product[]

    @OneToMany(() => Order, order => order.discount)
    orders: Order[]


}