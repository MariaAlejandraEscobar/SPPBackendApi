import { Favoritos } from "../models/favoritos";
import * as favoritosDao from "../dao/favoritos.dao";

export const listarFavoritos = async (): Promise<Favoritos[]> => {
    try {
        let favoritos: Favoritos[] = await favoritosDao.Listar();
        // BUSSINESS
        return favoritos;
    } catch (error) {
        throw error;
    }
}

export const crearFavoritos = async (favorito: Favoritos): Promise<boolean> => {
    try {
        return await favoritosDao.Agregar(favorito);
    } catch (error) {
        throw error;
    }
}

export const eliminarFavoritos = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return favoritosDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const actualizarFavoritos = async (favorito: Favoritos, id: string): Promise<boolean> => {
    try {
        return await favoritosDao.Editar(favorito, Number(id)); // Convertimos el id a número
    } catch (error) {
        throw error;
    }
}

