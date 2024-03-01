import "reflect-metadata";
import { Check, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductDetail } from "./ProductDetail";

@Entity()
@Check(`"modifiedDate" >= "createdDate"`)
export class Size {
    @PrimaryGeneratedColumn()
    sizeID: number;

    @Column({type: "nvarchar", length: 10})
    sizeName: string;

    @Column({type: "nvarchar", nullable: true})
    description: string;

    @Column("date")
    createdDate: Date;

    @Column("date")
    modifiedDate: Date;

    @OneToMany(() => ProductDetail, productDetail => productDetail.size)
    productDetails: ProductDetail[]
}