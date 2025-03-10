import GetConnection from "../config/connection";
import { Usuario } from "../models/usuario";

export const Listar = async (): Promise<Usuario[]> => {
    try {
        let tsql = "SELECT * FROM Usuario";
        const pool = await GetConnection();
        let rs = await pool.query<Usuario>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (usuario: Usuario): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Usuario(nombre, correo , contrasena) VALUES('${usuario.nombre}','${usuario.correo}','${usuario.contrasena}')`;
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
        let tsql = `DELETE FROM Usuario WHERE id=${id}`;
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

export const Editar = async (usr: Usuario, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Usuario 
                    SET Nombre='${usr.nombre}', 
                        Correo='${usr.correo}', 
                        Contrasena='${usr.contrasena}' 
                    WHERE id=${id}`;
        
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
