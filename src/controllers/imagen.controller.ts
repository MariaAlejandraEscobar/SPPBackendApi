import { Imagen } from "../models/imagen";
import * as imagenDao from "../dao/imagen.dao";

export const listarImagenes = async (): Promise<Imagen[]> => {
    try {
        let imagenes: Imagen[] = await imagenDao.Listar();
        // BUSSINESS
        return imagenes;
    } catch (error) {
        throw error;
    }
}

export const crearImagen = async (imagen: Imagen): Promise<boolean> => {
    try {
        return await imagenDao.Agregar(imagen);
    } catch (error) {
        throw error;
    }
}

export const eliminarImagen = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return imagenDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const actualizarImagen = async (imagen: Imagen, id: string): Promise<boolean> => {
    try {
        return await imagenDao.Editar(imagen, parseInt(id));
    } catch (error) {
        throw error;
    }
}
