import { test, expect } from '@playwright/test';

test.describe('Pruebas de Humo - Endpoints de API', () => {
  test('Verificar que el endpoint POST /api/favoritos/add responde', async ({ request }) => {
    const response = await request.post('http://localhost:3000/api/favoritos/add', {
      data: {},
    });
    expect([200, 400, 500]).toContain(response.status()); 
  });

  test('Verificar que el endpoint GET /api/favoritos/:id responde', async ({ request }) => {
    const response = await request.get('http://localhost:3000/api/favoritos/2');
    expect([200, 404, 500]).toContain(response.status()); 
  });

  test('Verificar que el endpoint PUT /api/favoritos/:id responde', async ({ request }) => {
    const response = await request.put('http://localhost:3000/api/favoritos/2', {
      data: {},
    });
    expect([200, 400, 500]).toContain(response.status()); // 
  });

  test('Verificar que el endpoint DELETE /api/favoritos/:id responde', async ({ request }) => {
    const response = await request.delete('http://localhost:3000/api/favoritos/2');
    expect([200, 400, 500]).toContain(response.status()); 
  });
});