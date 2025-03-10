import { Compra } from "../models/compra";
import * as compraDao from "../dao/compra.dao";

export const listarCompras = async (): Promise<Compra[]> => {
    try {
        return await compraDao.listar();
    } catch (error) {
        throw error;
    }
}

export const crearCompra = async (compra: Compra): Promise<boolean> => {
    try {
        return await compraDao.agregar(compra);
    } catch (error) {
        throw error;
    }
}

export const eliminarCompra = async (id: string): Promise<boolean> => {
    try {
        let compraId = parseInt(id);
        return await compraDao.eliminar(compraId);
    } catch (error) {
        throw error;
    }
}

export const actualizarCompra = async (compra: Compra, id: string): Promise<boolean> => {
    try {
        return await compraDao.editar(compra, parseInt(id));
    } catch (error) {
        throw error;
    }
}
