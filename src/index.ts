import express from 'express';
import cors from 'cors';
import usuarioRouter from './routes/usuario.routes';
import proveedorProductoRouter from './routes/proveedorProducto.routes';
import proveedorRouter from './routes/proveedor.routes';
import ProductoRouter from './routes/producto.routes';
import compraRouter from './routes/compra.routes';
import favoritosRouter from './routes/favoritos.routes';
import listarCompraRouter from './routes/listarCompra.routes';
import ImagenRouter from './routes/imagen.routes';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const PORT = 3000;

app.use('/api/usuario', usuarioRouter);
app.use('/api/proveedorProductos', proveedorProductoRouter);
app.use('/api/proveedor', proveedorRouter);
app.use('/api/Producto', ProductoRouter);
app.use('/api/Compra', compraRouter);
app.use('/api/favoritos', favoritosRouter);
app.use('/api/listarCompra', listarCompraRouter);
app.use('/api/Imagen', ImagenRouter);


app.listen(PORT, () => {
    console.log(`Servidor escuchan el puerto ${PORT}`)
})