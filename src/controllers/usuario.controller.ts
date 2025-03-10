import { Usuario } from "../models/usuario";
import * as usuarioDao from "../dao/usuario.dao";

export const listarUsuarios = async (): Promise<Usuario[]> => {
    try {
        let u: Usuario[] = await usuarioDao.Listar();
        //BUSSINESS
        return u;
    } catch (error) {
        throw error;
    }
}

export const crearUsuario = async (usuario: Usuario): Promise<boolean> => {
    try {
        return await usuarioDao.Agregar(usuario);
    } catch (error) {
        throw error;
    }
}

export const EliminarUsuario = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return usuarioDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const ActualizarUsuario = async (usr: Usuario, id: string): Promise<boolean> => {
    try {
        return await usuarioDao.Editar(usr, parseInt(id));
    } catch (error) {
        throw error;
    }
}