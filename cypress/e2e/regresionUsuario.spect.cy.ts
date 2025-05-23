describe('Pruebas de regresión para Usuario', () => {
    describe('Pruebas de regresión para Usuario', () => {

  it('GET /api/usuario - debe listar todos los usuarios correctamente', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/api/usuario',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.not.eq(404);

      expect(response.status).to.eq(200);

      expect(response.body).to.be.an('array');

      if(response.body.length > 0){
        expect(response.body[0]).to.have.all.keys('id', 'nombre', 'correo', 'contrasena');
      }
    });
  });

});

    
  it('POST /api/usuario/add - debe crear un nuevo usuario correctamente', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/usuario/add',
      body: {
        nombre: "TestUser4",
        correo: "testuser4@example.com",
        contrasena: "123456"
      },
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.not.eq(404);

      expect(response.status).to.eq(201);

      expect(response.body).to.eq(true);
    });
  });
    it('PUT /api/usuario/:id - debe actualizar un usuario correctamente', () => {
    const usuarioId = 1; 
    const usuarioActualizado = {
      id: usuarioId,
      nombre: "UsuarioActualizado",
      correo: "actualizado@example.com",
      contrasena: "nuevacontrasena123"
    };

    cy.request({
      method: 'PUT',
      url: `http://localhost:3000/api/usuario/${usuarioId}`,
      body: usuarioActualizado,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.not.eq(404);

      expect(response.status).to.eq(202);
    });
  });
   it('DELETE /api/usuario/:id - debe eliminar un usuario correctamente', () => {
    const usuarioId = 1; 

    cy.request({
      method: 'DELETE',
      url: `http://localhost:3000/api/usuario/${usuarioId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.not.eq(404);

      expect(response.status).to.eq(202);
    });
  });
});
