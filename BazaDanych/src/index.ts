import { AppDataSource } from "./data-source"
import { Hero } from "./entity/Hero"

AppDataSource.initialize().then(async () => {




    console.log("Succesfuly loaded database!")
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Hero)
    console.log("Loaded users: ", users)



}).catch(error => console.log(error))
