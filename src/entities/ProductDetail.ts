import "reflect-metadata";
import { Check, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm"
import { ProductColor } from "./ProductColor"
import { Size } from "./Size"
import { Cart } from "./Cart"
import { OrderDetail } from "./OrderDetail"

@Entity()
@Unique(["productColor", "size"])
@Check(`"modifiedDate" >= "createdDate"`)
@Check(`"soldQuantity" >= 0`)
@Check(`"inventoryQuantity" >= 0`)
export class ProductDetail {
    @PrimaryGeneratedColumn()
    productDetailID: number

    @ManyToOne(() => ProductColor, productColor => productColor.productDetails)
    @JoinColumn({name: "productColorID", referencedColumnName: "productColorID"})
    productColor: ProductColor

    @ManyToOne(() => Size, size => size.productDetails)
    @JoinColumn({name: "sizeID", referencedColumnName: "sizeID"})
    size: Size

    @Column()
    soldQuantity: number

    @Column()
    inventoryQuantity: number

    @Column("date")
    createdDate: Date

    @Column("date")
    modifiedDate: Date

    @OneToMany(() => Cart, cart => cart.productDetail)
    carts: Cart

    @OneToMany(() => OrderDetail, orderDetail => orderDetail.productDetail)
    orderDetails: OrderDetail[]
}