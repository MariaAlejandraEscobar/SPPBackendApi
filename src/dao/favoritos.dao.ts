import GetConnection from "../config/connection";
import { Favoritos } from "../models/favoritos";

export const Listar = async (): Promise<Favoritos[]> => {
    try {
        let tsql = "SELECT * FROM Favoritos";
        const pool = await GetConnection();
        let rs = await pool.query<Favoritos>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (Favoritos: Favoritos): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Favoritos(IdUsuario, IdProducto) VALUES(${Favoritos.idUsuario}, ${Favoritos.idProducto})`;
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
        let tsql = `DELETE FROM Favoritos WHERE Id=${id}`;
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

export const Editar = async (fv: Favoritos, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Favoritos SET IdUsuario=${fv.idUsuario}, IdProducto=${fv.idProducto} WHERE Id=${id}`;
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

