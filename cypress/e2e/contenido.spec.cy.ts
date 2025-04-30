describe('CRUD de Producto API', () => {
  const baseUrl = 'http://localhost:3000/producto';

  const productoMock = {
    nombre: 'Producto Test',
    descripcion: 'Descripción de prueba',
    precio: 123.45
  };

  it('Debe crear un producto (POST /producto/add)', () => {
    cy.request({
      method: 'POST',
      url: `http://localhost:3000/api/producto/add`,
      body: productoMock,
      failOnStatusCode: false, 
    }).then((response) => {
      expect(response.status).to.eq(201); 
    });
  });
  it('Debe obtener todos los productos (GET /producto)', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/api/producto',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array'); // Se espera un array de productos
    });
  });

  it('Debe actualizar un producto (PUT /producto/update)', () => {
    const productoActualizado = {
      idProducto: 20, 
      nombre: 'Producto Test Actualizado',
      descripcion: 'Descripción actualizada',
      precio: 150.00
    };

    cy.request({
      method: 'PUT',
      url: `http://localhost:3000/api/producto/${productoActualizado.idProducto}`, 
      body: productoActualizado,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(202); 
    });
  });
  it('Debe eliminar un producto (DELETE /producto/:id)', () => {
    const productoId = 20; 
  
    cy.request({
      method: 'DELETE',
      url: `http://localhost:3000/api/producto/${productoId}`,
      failOnStatusCode: false, 
    }).then((response) => {
      expect(response.status).to.eq(202); 
    });
  });
});

 
  
