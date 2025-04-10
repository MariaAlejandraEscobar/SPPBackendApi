import express from 'express';
import * as compraController from '../controllers/compra.controller';

const router = express.Router();

router.get('/', (req, res) => {
    compraController.listarCompras()
        .then((data) => res.json(data))
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});

router.get('/:id', (req, res) => {
    compraController.listarCompras()
        .then((data) => res.json(data))
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});

router.post('/add', (req, res) => {
    compraController.crearCompra(req.body)
        .then((result) => result ? res.status(201).send() : res.status(500).send())
        .catch((error) => {
            console.error(error);
            res.status(500).send();
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
  
    compraController.eliminarCompra(id)
      .then((result) => {
        if (result) {
          res.status(200).json({ mensaje: 'Compra eliminada correctamente' });
        } else {
          res.status(404).json({ mensaje: 'Compra no encontrada' });
        }
      })
      .catch((error) => {
        console.error('Error al eliminar compra:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      });
  });
  

router.put('/:id', (req, res) => {
    if (req.params.id !== req.body.idCompra.toString()) {
        res.status(400).send();
    } else {
        compraController.actualizarCompra(req.body, req.params.id)
            .then((result) => result ? res.status(202).send() : res.status(500).send())
            .catch((error) => {
                console.error(error);
                res.status(500).send();
            });
    }
});

export default router;
