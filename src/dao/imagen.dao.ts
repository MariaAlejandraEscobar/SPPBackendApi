import GetConnection from "../config/connection";
import { Imagen } from "../models/imagen";

export const Listar = async (): Promise<Imagen[]> => {
    try {
        let tsql = "SELECT * FROM Imagen";
        const pool = await GetConnection();
        let rs = await pool.query<Imagen>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (imagen: Imagen): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Imagen(IdProducto, Url) VALUES(${imagen.idProducto}, '${imagen.url}')`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const Eliminar = async (id: number): Promise<boolean> => {
    try {
        let tsql = `DELETE FROM Imagen WHERE id=${id}`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const Editar = async (imagen: Imagen, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Imagen SET IdProducto=${imagen.idProducto}, Url='${imagen.url}' WHERE id=${id}`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}
