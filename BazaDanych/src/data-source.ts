import "reflect-metadata"
import { DataSource } from "typeorm"
import { Hero } from "./entity/Hero"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Hero],
    migrations: [],
    subscribers: [],
})
