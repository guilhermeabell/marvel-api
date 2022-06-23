

describe('GET /characters', function() {

    const characters = [
    {
        name: 'Peter parker',
        alias: 'homem aranha',
        team: ['novos vingadores'],
        active: true
    },
    {
        name: 'Charles xavier',
        alias: 'Professor X',
        team: ['x-men'],
        active: true
    },
    {
        name: 'Logan',
        alias: 'wolverine',
        team: ['x-men'],
        active: true
    }
    ]

    before(function(){
        cy.setToken()
        cy.back2ThePast()
    })

    it('deve retornar uma lista de personagens', function() {
            cy.getCharacters().then(function(response) {
                expect(response.status).to.equal(200)
                expect(response.body).to.be.a('array')
                expect(response.body.length).greaterThan(0)

            })
    })
})

