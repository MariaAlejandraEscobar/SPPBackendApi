import { Proveedor } from "../models/proveedor";
import * as proveedorDao from "../dao/proveedor.dao";

export const listarProveedores = async (): Promise<Proveedor[]> => {
    try {
        let proveedores: Proveedor[] = await proveedorDao.Listar();
        // BUSSINESS
        return proveedores;
    } catch (error) {
        throw error;
    }
}

export const crearProveedor = async (proveedor: Proveedor): Promise<boolean> => {
    try {
        return await proveedorDao.Agregar(proveedor);
    } catch (error) {
        throw error;
    }
}

export const eliminarProveedor = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return proveedorDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}
export const actualizarProveedor = async (proveedor: Proveedor, id: string): Promise<boolean> => {
    try {
        // Convertir fechaVenta a Date si es un string
        if (typeof proveedor.fechaVenta === "string") {
            proveedor.fechaVenta = new Date(proveedor.fechaVenta);
        }

        return await proveedorDao.Editar(proveedor, parseInt(id));
    } catch (error) {
        console.error("Error en actualizarProveedor:", error);
        throw error;
    }
};

