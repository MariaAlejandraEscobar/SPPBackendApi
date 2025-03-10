import express from 'express';
import * as listarCompraController from '../controllers/listarCompra.controller';
import { ListarCompra } from '../models/listarCompra';

const router = express.Router();

router.get('/', (req, res) => {
    listarCompraController.listarListarCompra()
        .then((data) => res.json(data))
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});

router.post('/add', (req, res) => {
    listarCompraController.crearListarCompra(req.body)
        .then((result) => result ? res.status(201).send() : res.status(500).send())
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});

router.delete('/:id', (req, res) => {
    listarCompraController.eliminarListarCompra(req.params.id)
        .then((result) => result ? res.status(202).send() : res.status(500).send())
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});

router.put('/:id', (req, res) => {
    if (req.params.id != String((req.body as ListarCompra).idCompra)) {
        res.status(400).send();
    } else {
        listarCompraController.actualizarListarCompra(req.body as ListarCompra, req.params.id)
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
