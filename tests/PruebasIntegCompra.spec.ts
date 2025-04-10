import test, { expect } from "@playwright/test";

test('Flujo completo de una compra (crear, obtener, actualizar, eliminar)', async ({ request }) => {
    const nuevaCompra = {
      idUsuario: 1,
      fecha: new Date().toISOString()
    };

    const createResponse = await request.post('http://localhost:3000/api/compra/add', {
      data: nuevaCompra
    });
  
    expect(createResponse.status()).toBe(201); 
  
    const createdCompra = await createResponse.json();
    const idCompraCreada = createdCompra.idCompra;
    expect(idCompraCreada).toBeDefined();
  
    const getResponse = await request.get(`http://localhost:3000/api/compra/${idCompraCreada}`);
    expect(getResponse.status()).toBe(200);
  
    const compraObtenida = await getResponse.json();
    expect(compraObtenida.idUsuario).toBe(nuevaCompra.idUsuario);
  
    const compraActualizada = {
      idCompra: idCompraCreada,
      idUsuario: 2, 
      fecha: new Date().toISOString()
    };
  
    const updateResponse = await request.put(`http://localhost:3000/api/compra/${idCompraCreada}`, {
      data: compraActualizada
    });
  
    expect(updateResponse.status()).toBe(202); 
  
    // Confirmar actualización
    const getUpdatedResponse = await request.get(`http://localhost:3000/api/compra/${idCompraCreada}`);
    const compraActualizadaObtenida = await getUpdatedResponse.json();
    expect(compraActualizadaObtenida.idUsuario).toBe(2);
  
    // Eliminar la compra
    const deleteResponse = await request.delete(`http://localhost:3000/api/compra/${idCompraCreada}`);
    expect(deleteResponse.status()).toBe(202); 
  
    // Confirmar eliminación
    const getDeletedResponse = await request.get(`http://localhost:3000/api/compra/${idCompraCreada}`);
    expect(getDeletedResponse.status()).toBe(404); 
  });
  