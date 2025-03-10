import { ProveedorProducto } from "../models/proveedorProducto";
import * as proveedorProductoDao from "../dao/proveedorProducto.dao";

export const listarProveedorProductos = async (): Promise<ProveedorProducto[]> => {
    try {
        let proveedoresProductos: ProveedorProducto[] = await proveedorProductoDao.Listar();
        //BUSSINESS
        return proveedoresProductos;
    } catch (error) {
        throw error;
    }
}

export const crearProveedorProducto = async (proveedorProducto: ProveedorProducto): Promise<boolean> => {
    try {
        return await proveedorProductoDao.Agregar(proveedorProducto);
    } catch (error) {
        throw error;
    }
}

export const eliminarProveedorProducto = async (idProveedor: number, idProducto: number): Promise<boolean> => {
    try {
        return await proveedorProductoDao.Eliminar(idProveedor, idProducto);
    } catch (error) {
        throw error;
    }
}

export const actualizarProveedorProducto = async (proveedorProducto: ProveedorProducto, idProveedor: number, idProducto: number): Promise<boolean> => {
    try {
        return await proveedorProductoDao.Editar(proveedorProducto, idProveedor, idProducto);
    } catch (error) {
        throw error;
    }
}
