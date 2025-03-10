import GetConnection from "../config/connection";
import { Producto } from "../models/producto";

export const ListarProductos = async (): Promise<Producto[]> => {
    try {
        let tsql = "SELECT * FROM Producto";
        const pool = await GetConnection();
        let rs = await pool.query<Producto>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const AgregarProducto = async (producto: Producto): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Producto(Nombre, Descripcion, Precio) VALUES('${producto.nombre}','${producto.descripcion}','${producto.precio}')`;
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

export const EliminarProducto = async (id: number): Promise<boolean> => {
    try {
        let tsql = `DELETE FROM Producto WHERE IdProducto=${id}`;
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

export const EditarProducto = async (prod: Producto, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Producto SET Nombre='${prod.nombre}', Descripcion='${prod.descripcion}', Precio=${prod.precio} WHERE IdProducto=${id}`;
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
