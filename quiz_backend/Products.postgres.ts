import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    _id!: String;

    @Column({ type: "text" })
    seller!: String;

    @Column({ type: "text" })
    name!: String;

    @Column({ type: "text" })
    detail!: String;

    @Column({ type: "text" })
    price!: Number;

    @Column({ type: "text" })
    createdAt!: Date;
}
