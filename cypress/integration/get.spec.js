

describe('GET /characters', function() {

    before(function(){
        cy.setToken()
        cy.back2ThePast()
    })

    it('deve retornar uma lista de personagens', function() {
            cy.getCharacters().then(function(response) {
                expect(response.status).to.equal(200)
                expect(response.body).to.be.a('array')
            })
    })
})

