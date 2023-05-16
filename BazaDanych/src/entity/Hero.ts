import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Hero {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    HeroName: string

}
