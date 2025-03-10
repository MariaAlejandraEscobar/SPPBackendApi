import express from 'express';
import * as proveedorProductoController from '../controllers/proveedorProducto.controller';
import { ProveedorProducto } from '../models/proveedorProducto';

const router = express.Router();

router.get('/', (req, res) => {
    proveedorProductoController.listarProveedorProductos()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.post('/add', (req, res) => {
    proveedorProductoController.crearProveedorProducto(req.body as ProveedorProducto)
        .then((f) => {
            if (f) res.status(201).send();
            else res.status(500).send();
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.delete('/:idProveedor/:idProducto', (req, res) => {
    proveedorProductoController.eliminarProveedorProducto(parseInt(req.params.idProveedor), parseInt(req.params.idProducto))
        .then((f) => {
            if (f) res.status(202).send();
            else res.status(500).send();
        }).catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.put('/:idProveedor/:idProducto', (req, res) => {
    let proveedorProducto = req.body as ProveedorProducto;
    if (req.params.idProveedor != proveedorProducto.idProveedor.toString() || req.params.idProducto != proveedorProducto.idProducto.toString()) {
        res.status(400).send();
    } else {
        proveedorProductoController.actualizarProveedorProducto(proveedorProducto, parseInt(req.params.idProveedor), parseInt(req.params.idProducto))
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
