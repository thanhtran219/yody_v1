import "reflect-metadata";
import { Check, Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany, ManyToOne, Unique} from "typeorm";
import { Color } from "./Color";
import { Product } from "./Product";
import { ProductDetail } from "./ProductDetail";
import { ProductImage } from "./ProductImage";

@Entity()
@Unique(["product", "color"])
@Check(`"modifiedDate" >= "createdDate"`)
export class ProductColor {
    @PrimaryGeneratedColumn()
    productColorID: number

    @ManyToOne(() => Product, (product) => product.productColors)
    @JoinColumn({name: "productID", referencedColumnName: "productID"})
    product: Product

    @ManyToOne(() => Color, (color) => color.productColors)
    @JoinColumn({name: "colorID", referencedColumnName: "colorID"})
    color: Color

    @Column("date")
    createdDate: Date

    @Column("date")
    modifiedDate: Date

    @OneToMany(() => ProductDetail, productDetail => productDetail.productColor)
    productDetails: ProductDetail[]

    @OneToMany(() => ProductImage, productImage => productImage.productColor)
    images: ProductImage[]
}