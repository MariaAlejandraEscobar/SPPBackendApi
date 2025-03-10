import GetConnection from "../config/connection";
import { Proveedor } from "../models/proveedor";

export const Listar = async (): Promise<Proveedor[]> => {
    try {
        let tsql = "SELECT * FROM Proveedor";
        const pool = await GetConnection();
        let rs = await pool.query<Proveedor>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (proveedor: Proveedor): Promise<boolean> => {
    try {
        // Verificar que fechaVenta no sea null o undefined
        if (!proveedor.fechaVenta) {
            throw new Error("fechaVenta es requerida.");
        }

        // Convertir fechaVenta a un objeto Date si es un string
        if (typeof proveedor.fechaVenta === "string") {
            proveedor.fechaVenta = new Date(proveedor.fechaVenta);
        }

        // Construcción de la consulta SQL con parámetros seguros
        let tsql = `INSERT INTO Proveedor(FechaVenta, Telefono, TotalVenta, Direccion) 
        VALUES(@FechaVenta, @Telefono, @TotalVenta, @Direccion)`;

        const pool = await GetConnection();
        let rs = await pool.request()
            .input("FechaVenta", proveedor.fechaVenta.toISOString())
            .input("Telefono", proveedor.telefono)
            .input("TotalVenta", proveedor.totalVenta)
            .input("Direccion", proveedor.direccion)
            .query(tsql);

        return rs != undefined && rs.rowsAffected.length === 1;
    } catch (error) {
        console.error("Error al agregar proveedor:", error);
        throw error;
    }
}


export const Eliminar = async (id: number): Promise<boolean> => {
    try {
        let tsql = `DELETE FROM Proveedor WHERE id=${id}`;
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

export const Editar = async (proveedor: Proveedor, id: number): Promise<boolean> => {
    try {
        // Convertir fechaVenta si es un string
        if (typeof proveedor.fechaVenta === "string") {
            proveedor.fechaVenta = new Date(proveedor.fechaVenta);
        }

        // Validar que fechaVenta es una fecha válida
        if (!(proveedor.fechaVenta instanceof Date) || isNaN(proveedor.fechaVenta.getTime())) {
            throw new Error("FechaVenta no es una fecha válida");
        }

        let tsql = `UPDATE Proveedor SET 
            FechaVenta='${proveedor.fechaVenta.toISOString()}',
            Telefono=${proveedor.telefono},
            TotalVenta=${proveedor.totalVenta},
            Direccion='${proveedor.direccion}'
            WHERE id=${id}`;

        const pool = await GetConnection();
        let rs = await pool.query(tsql);

        return rs != undefined && rs.rowsAffected.length == 1;
    } catch (error) {
        console.error("Error en la actualización del proveedor:", error);
        throw error;
    }
};

