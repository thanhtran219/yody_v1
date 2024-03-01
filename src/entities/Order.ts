import "reflect-metadata";
import { Check, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserAddress } from "./UserAddress";
import { Discount } from "./Discount";
import { OrderDetail } from "./OrderDetail";

@Entity()
@Check(`"totalPrice" >= 0`)
export class Order {
    @PrimaryGeneratedColumn()
    orderID: number

    @ManyToOne(() => UserAddress, userAddress => userAddress.orders)
    @JoinColumn({name: "addressID", referencedColumnName: "addressID"})
    userAddress: UserAddress

    @Column("date")
    orderedDate: Date
    
    @ManyToOne(() => Discount, discount => discount.orders)
    @JoinColumn({name: "discountID", referencedColumnName: "discountID"})
    discount: Discount

    @Column({type: "decimal"})
    totalPrice: number

    @Column({type: "nvarchar", length: 50 })
    paymentStatus: string

    @Column({type: "nvarchar", length: 50 })
    deliveryStatus: string

    @OneToMany(() => OrderDetail, orderDetail => orderDetail.order)
    orderDetails: OrderDetail[]
}