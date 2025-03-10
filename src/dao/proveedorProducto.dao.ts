import GetConnection from "../config/connection";
import { ProveedorProducto } from "../models/proveedorProducto";

export const Listar = async (): Promise<ProveedorProducto[]> => {
    try {
        let tsql = "SELECT * FROM ProveedorProducto";
        const pool = await GetConnection();
        let rs = await pool.query<ProveedorProducto>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (proveedorProducto: ProveedorProducto): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO ProveedorProducto(idProveedor, idProducto, cantidadDisponible) VALUES(${proveedorProducto.idProveedor}, ${proveedorProducto.idProducto}, ${proveedorProducto.cantidadDisponible})`;
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

export const Eliminar = async (idProveedor: number, idProducto: number): Promise<boolean> => {
    try {
        let tsql = `DELETE FROM ProveedorProducto WHERE idProveedor=${idProveedor} AND idProducto=${idProducto}`;
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

export const Editar = async (proveedorProducto: ProveedorProducto, idProveedor: number, idProducto: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE ProveedorProducto SET cantidadDisponible=${proveedorProducto.cantidadDisponible} WHERE idProveedor=${idProveedor} AND idProducto=${idProducto}`;
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
