import { test, expect } from '@playwright/test';

test('Crear Compra', async ({ request }) => {
    const nuevaCompra = {
      idCompra: 2,
      idUsuario: 2,
      fecha: new Date().toISOString(),
    };
  
    const response = await request.post('http://localhost:3000/api/compra/add', {
      data: nuevaCompra,
    });
  
    expect(response.status()).toBe(201);
  });
  

test('Obtener Compra por ID', async ({ request }) => {
  const response = await request.get('http://localhost:3000/api/compra/2');

  expect(response.status()).toBe(200);

  const text = await response.text();
  console.log('Respuesta de obtención:', text || 'No se recibió cuerpo en la respuesta');

  try {
    if (!text || !text.trim().startsWith('{') && !text.trim().startsWith('[')) {
      throw new Error('Respuesta vacía o no es un JSON válido');
    }

    const body = JSON.parse(text);

    const compra = Array.isArray(body)
      ? body.find((c) => c.idCompra === 2)
      : body;

    expect(compra).toBeDefined();
    expect(compra.idCompra).toBe(2);
    expect(compra.idUsuario).toBe(2);
  } catch (error) {
    console.error('Error al convertir a JSON:', error);
    throw new Error('La respuesta no fue un JSON válido.');
  }
});

test('Actualización Compra', async ({ request }) => {
    const compraActualizada = {
      idCompra: 2,
      idUsuario: 2, 
      fecha: new Date().toISOString(),
    };
  
    const response = await request.put('http://localhost:3000/api/compra/2', {
      data: compraActualizada,
    });
  
    const getResponse = await request.get('http://localhost:3000/api/compra/2');
    expect(getResponse.status()).toBe(200);
  
  });
  test('Eliminar Compra', async ({ request }) => {
    const idCompraExistente = 17;
  
    const deleteResponse = await request.delete(`http://localhost:3000/api/compra/${idCompraExistente}`);
    const getResponse = await request.get(`http://localhost:3000/api/compra/${idCompraExistente}`);
  
  });

  


