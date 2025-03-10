import GetConnection from "../config/connection";
import { Compra } from "../models/compra";

export const listar = async (): Promise<Compra[]> => {
    try {
        const tsql = "SELECT * FROM Compra";
        const pool = await GetConnection();
        const rs = await pool.query<Compra>(tsql);
        return rs ? rs.recordset : [];
    } catch (error) {
        throw error;
    }
}

export const agregar = async (compra: Compra): Promise<boolean> => {
    try {
        const pool = await GetConnection();

        
        const fechaISO = new Date(compra.fecha).toISOString();

        
        const tsql = `INSERT INTO Compra(idUsuario, fecha) VALUES (@idUsuario, @fecha)`;
        const rs = await pool.request()
            .input("idUsuario", compra.idUsuario)
            .input("fecha", fechaISO)
            .query(tsql);

        return rs.rowsAffected.length === 1;
    } catch (error) {
        console.error("Error al agregar compra:", error);
        throw error;
    }
};

export const eliminar = async (id: number): Promise<boolean> => {
    try {
        const tsql = `DELETE FROM Compra WHERE idCompra = ${id}`;
        const pool = await GetConnection();
        const rs = await pool.query(tsql);
        return rs.rowsAffected.length === 1;
    } catch (error) {
        throw error;
    }
}

export const editar = async (compra: Compra, id: number): Promise<boolean> => {
    try {
        const fechaISO = new Date(compra.fecha).toISOString(); 
        const tsql = `UPDATE Compra SET idUsuario = ${compra.idUsuario}, fecha = '${fechaISO}' WHERE idCompra = ${id}`;
                const pool = await GetConnection();
        const rs = await pool.query(tsql);
        return rs.rowsAffected.length === 1;
    } catch (error) {
        throw error;
    }
}
