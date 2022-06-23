

describe('GET /characters', function() {
    it('deve retornar uma lista de personagens', function() {
            cy.getCharacters.then(function(response) {
                expect(response.status.to.equal(200))
            })
    })
})

