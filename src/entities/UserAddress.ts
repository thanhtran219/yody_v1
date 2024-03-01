import "reflect-metadata";
import { Check, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Order } from "./Order";

@Entity()
@Check(`"modifiedDate" >= "createdDate"`)
export class UserAddress {
    @PrimaryGeneratedColumn()
    addressID: number

    @ManyToOne(() => User, user => user.addresses)
    @JoinColumn({name: "userID", referencedColumnName: "userID"})
    user: User

    @Column({type: "nvarchar", length: 50 })
    fullName: string

    @Column({type: "varchar", length: 11 })
    phone: string

    @Column({type: "nvarchar", length: 50 })
    company: string

    @Column({type: "nvarchar"})
    address: string

    @Column({type: "nvarchar", length: 50 })
    country: string

    @Column({type: "nvarchar", length: 50 })
    province: string

    @Column({type: "nvarchar", length: 50 })
    district: string

    @Column({type: "nvarchar", length: 50 })
    ward: string

    @Column("date")
    createdDate: Date

    @Column("date")
    modifiedDate: Date

    @Column()
    isDefaultAddress: boolean

    @OneToMany(() => Order, order => order.userAddress)
    orders: Order
}