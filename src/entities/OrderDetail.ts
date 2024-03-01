import "reflect-metadata";
import { Check, Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique } from "typeorm";
import { Order } from "./Order";
import { ProductDetail } from "./ProductDetail";

@Entity()
@Unique(["order", "productDetail"])
@Check(`"quantity" > 0`)
@Check(`"price" > 0`)
export class OrderDetail {
    
    @PrimaryGeneratedColumn()
    orderDetailID: number;

    @ManyToOne(() => Order, order => order.orderDetails)
    @JoinColumn({name: "orderID", referencedColumnName: "orderID"})
    order: Order

    @ManyToOne(() => ProductDetail, productDetail => productDetail.orderDetails)
    @JoinColumn({name: "productDetailID", referencedColumnName:"productDetailID"})
    productDetail: ProductDetail

    @Column()
    quantity: number

    @Column("decimal")
    price: number
}