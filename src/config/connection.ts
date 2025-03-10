import sql, { ConnectionPool } from "mssql";
import { sqlConfig } from "./config";


export default async function GetConnection(): Promise<ConnectionPool> {
    try {
        const conn = await sql.connect(sqlConfig);
        return conn;
    } catch (error) {
        console.log(error);
        throw error;
    }
}