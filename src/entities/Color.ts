import "reflect-metadata";
import {Entity, Column, OneToMany, Check, PrimaryColumn} from "typeorm";
import { ProductColor } from "./ProductColor";
// import {}

@Entity()
@Check(`"modifiedDate" >= "createdDate"`)
export class Color {
    @PrimaryColumn({ type: "nvarchar", length: 5})
    colorID: string

    @Column("nvarchar")
    colorName: string

    @Column({ type: "nvarchar", nullable: true })
    description: string

    @Column("date")
    createdDate: Date

    @Column("date")
    modifiedDate: Date

    @OneToMany(() => ProductColor, productColor => productColor.color)
    productColors: ProductColor[]
}