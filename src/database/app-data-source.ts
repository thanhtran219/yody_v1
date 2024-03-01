import dotevn from "dotenv";
import { DataSource } from "typeorm";

dotevn.config();

const portString: string | undefined = process.env.SQL_PORT;
const port: number = portString ? parseInt(portString, 10) : 1433;

export const myDataSource = new DataSource({
    type: "mssql",
    host: process.env.SQL_HOST,
    port: port,
    username: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    entities: ["src/entities/*.ts"],
    synchronize: false,
    logging: false,
    options: {
        encrypt: false,
        trustServerCertificate: true,
      },
})