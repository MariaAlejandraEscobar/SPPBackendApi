import { Producto } from "../models/producto";
import * as productoDao from "../dao/producto.dao";

export const listarProductos = async (): Promise<Producto[]> => {
    try {
        let p: Producto[] = await productoDao.ListarProductos();
        return p;
    } catch (error) {
        throw error;
    }
}

export const crearProducto = async (producto: Producto): Promise<boolean> => {
    try {
        return await productoDao.AgregarProducto(producto);
    } catch (error) {
        throw error;
    }
}

export const eliminarProducto = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return productoDao.EliminarProducto(obj);
    } catch (error) {
        throw error;
    }
}

export const actualizarProducto = async (prod: Producto, id: string): Promise<boolean> => {
    try {
        return await productoDao.EditarProducto(prod, parseInt(id));
    } catch (error) {
        throw error;
    }
}
