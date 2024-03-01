import "reflect-metadata";
import { Check, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { User } from "./User";
import { ProductDetail } from "./ProductDetail";

@Entity()
@Unique(["user", "productDetail"])
@Check(`"quantity" > 0`)
export class Cart {
    @PrimaryGeneratedColumn()
    cartID: number

    @ManyToOne(() => User, user => user.carts)
    @JoinColumn({name: "userID", referencedColumnName: "userID"})
    user: User

    @ManyToOne(() => ProductDetail, productDetail => productDetail.carts)
    @JoinColumn({name: "productDetailID", referencedColumnName: "productDetailID"})
    productDetail: ProductDetail

    @Column()
    quantity: number
}