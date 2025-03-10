import GetConnection from "../config/connection";
import { ListarCompra } from "../models/listarCompra";

export const listar = async (): Promise<ListarCompra[]> => {
    try {
        const tsql = "SELECT * FROM ListarCompra";
        const pool = await GetConnection();
        const rs = await pool.query<ListarCompra>(tsql);
        return rs ? rs.recordset : [];
    } catch (error) {
        throw error;
    }
}

export const agregar = async (listarCompra: ListarCompra): Promise<boolean> => {
    try {
        const tsql = `INSERT INTO ListarCompra(idCompra, idProducto, cantidad) VALUES (${listarCompra.idCompra}, ${listarCompra.idProducto}, ${listarCompra.cantidad})`;
        const pool = await GetConnection();
        const rs = await pool.query(tsql);
        return rs.rowsAffected.length === 1;
    } catch (error) {
        throw error;
    }
}

export const eliminar = async (id: number): Promise<boolean> => {
    try {
        const tsql = `DELETE FROM ListarCompra WHERE idListaCompra = ${id}`;
        const pool = await GetConnection();
        const rs = await pool.query(tsql);
        return rs.rowsAffected.length === 1;
    } catch (error) {
        throw error;
    }
}

export const editar = async (listarCompra: ListarCompra, id: number): Promise<boolean> => {
    try {
        const tsql = `UPDATE ListarCompra SET 
            idCompra = ${listarCompra.idCompra}, 
            idProducto = ${listarCompra.idProducto}, 
            cantidad = ${listarCompra.cantidad} 
            WHERE idListaCompra = ${id}`; 
        
        const pool = await GetConnection();
        const rs = await pool.query(tsql);
        return rs.rowsAffected.length === 1;
    } catch (error) {
        throw error;
    }
};

