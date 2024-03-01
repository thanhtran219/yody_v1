import "reflect-metadata";
import { Check, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { UserAddress } from "./UserAddress";
import { Cart } from "./Cart";

@Entity()
@Unique(["phone"])
@Unique(["email"])
@Check(`"modifiedDate" >= "createdDate"`)
export class User {
    @PrimaryGeneratedColumn()
    userID: number

    @Column({type: "nvarchar", length: 50 })
    fullName: string

    @Column({type: "varchar", length: 11 })
    phone: string

    @Column({type: "varchar", length: 50 })
    email: string

    @Column({type: "varchar", length: 50 })
    password: string

    @Column("date")
    createdDate: Date

    @Column("date")
    modifiedDate: Date

    @Column({type: "varchar", length: 50 })
    role: string

    @OneToMany(() => UserAddress, userAddress => userAddress.user)
    addresses: UserAddress[]

    @OneToMany(() => Cart, cart => cart.user)
    carts: Cart
}