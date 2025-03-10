import express from 'express';
import * as imagenController from '../controllers/imagen.controller';
import { Imagen } from '../models/imagen';

const router = express.Router();

router.get('/', (req, res) => {
    imagenController.listarImagenes()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.post('/add', (req, res) => {
    imagenController.crearImagen(req.body as Imagen)
        .then((f) => {
            if (f) res.status(201).send();
            else res.status(500).send();
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.delete('/:id', (req, res) => {
    imagenController.eliminarImagen(req.params.id)
        .then((f) => {
            if (f) res.status(202).send();
            else res.status(500).send();
        }).catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.put('/:id', (req, res) => {
    if (req.params.id != String((req.body as Imagen).idProducto)) {
        res.status(400).send();
    } else {
        imagenController.actualizarImagen(req.body as Imagen, req.params.id)
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
