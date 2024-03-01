import "reflect-metadata";
import { Check, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductColor } from "./ProductColor";

@Entity()
@Check(`"modifiedDate" >= "createdDate"`)
export class ProductImage {
    @PrimaryGeneratedColumn()
    imageID: number

    @Column({type: "nvarchar"})
    imageName: string

    @ManyToOne(() => ProductColor, productColor => productColor.images)
    @JoinColumn({name: "productColorID", referencedColumnName: "productColorID"})
    productColor: ProductColor

    @Column({type: "nvarchar", length: "max", nullable: true})
    url: string

    @Column("date")
    createdDate: Date

    @Column("date")
    modifiedDate: Date
}