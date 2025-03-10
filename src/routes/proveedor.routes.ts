import express from 'express';
import * as proveedorController from '../controllers/proveedor.controller';
import { Proveedor } from '../models/proveedor';

const router = express.Router();

router.get('/', (req, res) => {
    proveedorController.listarProveedores()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.post('/add', (req, res) => {
    proveedorController.crearProveedor(req.body as Proveedor)
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
    proveedorController.eliminarProveedor(req.params.id)
        .then((f) => {
            if (f) res.status(202).send();
            else res.status(500).send();
        }).catch((e) => {
            console.log(e);
            res.status(500).send();
        });
});

router.put('/:id', (req, res) => {
    if (req.params.id != (req.body as Proveedor).id.toString()) {
        res.status(400).send();
    } else {
        proveedorController.actualizarProveedor(req.body as Proveedor, req.params.id)
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
