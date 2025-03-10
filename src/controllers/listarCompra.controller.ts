import { ListarCompra } from "../models/listarCompra";
import * as listarCompraDao from "../dao/listarCompra.dao";

export const listarListarCompra = async (): Promise<ListarCompra[]> => {
    try {
        return await listarCompraDao.listar();
    } catch (error) {
        throw error;
    }
}

export const crearListarCompra = async (listarCompra: ListarCompra): Promise<boolean> => {
    try {
        return await listarCompraDao.agregar(listarCompra);
    } catch (error) {
        throw error;
    }
}

export const eliminarListarCompra = async (id: string): Promise<boolean> => {
    try {
        let listarCompraId = parseInt(id);
        return await listarCompraDao.eliminar(listarCompraId);
    } catch (error) {
        throw error;
    }
}

export const actualizarListarCompra = async (listarCompra: ListarCompra, id: string): Promise<boolean> => {
    try {
        return await listarCompraDao.editar(listarCompra, parseInt(id));
    } catch (error) {
        throw error;
    }
}
