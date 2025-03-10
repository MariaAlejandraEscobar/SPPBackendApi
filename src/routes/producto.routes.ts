import express from 'express';
import * as productoController from '../controllers/producto.controller';
import { Producto } from '../models/producto';

const router = express.Router();

router.get('/', (req, res) => {
    productoController.listarProductos()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.post('/add', (req, res) => {
    productoController.crearProducto(req.body as Producto)
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
    productoController.eliminarProducto(req.params.id)
        .then((f) => {
            if (f) res.status(202).send();
            else res.status(500).send();
        }).catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.put('/:id', (req, res) => {
    if (req.params.id != (req.body as Producto).idProducto.toString()) {
        res.status(400).send();
    } else {
        productoController.actualizarProducto(req.body as Producto, req.params.id)
            .then((f) => {
                if (f) res.status(202).send();
                else res.status(500).send();
            }).catch((e) => {
                console.log(e);
                res.status(500).send();
            });
    }
});

export default router;
