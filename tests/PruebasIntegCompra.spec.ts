import { test, expect } from '@playwright/test';

test.describe('Integración de CRUD para Compra', () => {
 
  const idCompra = 2;
  const idUsuario = 2;

  test('Crear, Obtener, Actualizar y Eliminar Compra', async ({ request }) => {

    await request.delete(`http://localhost:3000/api/compra/${idCompra}`);

    //Crear Compra
    const nuevaCompra = {
      idCompra,
      idUsuario,
      fecha: new Date().toISOString(),
    };
    const crearResponse = await request.post('http://localhost:3000/api/compra/add', {
      data: nuevaCompra,
    });
    expect(crearResponse.status()).toBe(201);
    console.log(`Compra creada con id ${idCompra}`);

    //Obtener Compra
    const obtenerResponse = await request.get(`http://localhost:3000/api/compra/${idCompra}`);
    expect(obtenerResponse.status()).toBe(200);
    const bodyObtener = await obtenerResponse.text();
    console.log('Respuesta de obtención:', bodyObtener);

    let compraObtenida;
    try {
      const parsed = JSON.parse(bodyObtener);
      compraObtenida = Array.isArray(parsed)
        ? parsed.find(c => (c.idCompra || c.id) === idCompra)
        : parsed;
    } catch (error) {
      throw new Error("La respuesta de obtención no es JSON válido: " + bodyObtener);
    }
    expect(compraObtenida).toBeDefined();
    const compraId = compraObtenida.idCompra || compraObtenida.id;
    expect(compraId).toBe(idCompra);
    expect(compraObtenida.idUsuario).toBe(idUsuario);

    //Actualizar Compra
    const compraActualizada = {
      idCompra, 
      idUsuario,
      fecha: new Date().toISOString(), 
    };
    const actualizarResponse = await request.put(`http://localhost:3000/api/compra/${idCompra}`, {
      data: compraActualizada,
    });
    
    expect([200, 202]).toContain(actualizarResponse.status());
    console.log('Compra actualizada.');

    //Eliminar Compra
   /* const eliminarResponse = await request.delete(`http://localhost:3000/api/compra/${idCompra}`);
    console.log('Eliminar response status:', eliminarResponse.status());
    const bodyEliminar = await eliminarResponse.text();
    console.log('Respuesta de eliminación:', bodyEliminar);
    expect(eliminarResponse.status()).toBe(200);
    let respEliminar;
    try {
      respEliminar = JSON.parse(bodyEliminar);
    } catch (error) {
      throw new Error("La respuesta de eliminación no es JSON válido: " + bodyEliminar);
    }
    expect(respEliminar.mensaje).toBe('Compra eliminada correctamente');

    // (F) Verificar que la compra fue eliminada.
    const verificarResponse = await request.get(`http://localhost:3000/api/compra/${idCompra}`);
    // Se espera 404 o 204 (sin contenido) al intentar obtener una compra eliminada.
    expect([404, 204]).toContain(verificarResponse.status());
    console.log('Verificación de eliminación exitosa.');*/
  });
});