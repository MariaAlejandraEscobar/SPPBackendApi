import express from 'express';
import * as favoritosController from '../controllers/favoritos.controller';

const router = express.Router();


router.get('/', (req, res) => {
    favoritosController.listarFavoritos()
        .then((data) => res.json(data))
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});


router.post('/add', (req, res) => {
    favoritosController.crearFavoritos(req.body)
        .then((result) => result ? res.status(201).send() : res.status(500).send())
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});


router.delete('/:id', (req, res) => {
    favoritosController.eliminarFavoritos(req.params.id)
        .then((result) => result ? res.status(202).send() : res.status(500).send())
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});


router.put('/:id', (req, res) => {
    const idUrl = Number(req.params.id);
    const idBody = Number(req.body.idFavoritos);

    if (idUrl !== idBody) {
        res.status(400).send("ID in URL and body do not match");
    } else {
        favoritosController.actualizarFavoritos(req.body, req.params.id)
            .then((result) => result ? res.status(202).send() : res.status(500).send())
            .catch((error) => {
                console.error(error);
                res.status(500).send();
            });
    }
});

export default router;
