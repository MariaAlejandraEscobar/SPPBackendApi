import { test, expect } from '@playwright/test';

test.describe('Pruebas de Humo - Endpoints de API', () => {
  test('Verificar que el endpoint POST /api/compra/add responde', async ({ request }) => {
    const response = await request.post('http://localhost:3000/api/compra/add', {
      data: {},
    });
    expect([200, 400, 500]).toContain(response.status()); // Aceptamos cualquier respuesta, sin validar datos
  });

  test('Verificar que el endpoint GET /api/compra/:id responde', async ({ request }) => {
    const response = await request.get('http://localhost:3000/api/compra/2');
    expect([200, 404, 500]).toContain(response.status()); // Solo verificamos respuesta
  });

  test('Verificar que el endpoint PUT /api/compra/:id responde', async ({ request }) => {
    const response = await request.put('http://localhost:3000/api/compra/2', {
      data: {},
    });
    expect([200, 400, 500]).toContain(response.status()); // Solo verificamos respuesta
  });

  test('Verificar que el endpoint DELETE /api/compra/:id responde', async ({ request }) => {
    const response = await request.delete('http://localhost:3000/api/compra/2');
    expect([200, 400, 500]).toContain(response.status()); // Solo verificamos respuesta
  });
});