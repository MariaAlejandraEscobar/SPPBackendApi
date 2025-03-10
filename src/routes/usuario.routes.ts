import express from 'express'
import * as usuarioController from '../controllers/usuario.controller';
import { Usuario } from '../models/usuario';

const router = express.Router();

// Obtener todos los usuarios
router.get('/', (req, res) => {
    usuarioController.listarUsuarios()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.error("Error al listar usuarios:", e);
            res.status(500).json({ error: "Error interno del servidor" });
        });
});

router.post('/add', (req, res) => {
    console.log("Datos recibidos:", req.body);
    usuarioController.crearUsuario(req.body)
        .then((usuario) => {
            res.status(201).json(usuario);
        })
        .catch((error) => {
            console.error("Error al crear usuario:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        });
});


router.delete('/:id', (req, res) => {
    usuarioController.EliminarUsuario(req.params.id)
        .then((f) => {
            if (f)
                res.status(202).send();
            else
                res.status(500).send();
        }).catch((e) => {
            console.log(e);
            res.status(500).send();
        })
});

router.put('/:id', (req, res) => {
    if (req.params.id != String((req.body as Usuario).id)) {
        res.status(400).send();
    } else {
        usuarioController.ActualizarUsuario(req.body as Usuario, req.params.id)
            .then((f) => {
                if (f)
                    res.status(202).send();
                else
                    res.status(500).send();
            }).catch((e) => {
                console.log(e);
                res.status(500).send();
            });
    }
})

export default router;