

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
        alias: 'Wolverine',
        team: ['X-men'],
        active: true
    }
    ]

    before(function(){
        cy.back2ThePast()
        cy.setToken()
        cy.populateCharacters(characters)
    })

    it('deve retornar uma lista de personagens', function() {
            cy.getCharacters().then(function(response) {
                expect(response.status).to.equal(200)
                expect(response.body).to.be.a('array')
                expect(response.body.length).greaterThan(0)

            })
    })

    it.only('deve poder buscar personagem por nome', function() {
        cy.searchCharacters('Logan').then(function(response){
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(1)
            expect(response.body[0].name).to.equal('Logan')
            expect(response.body[0].alias).to.equal('Wolverine')
            expect(response.body[0].active).to.equal(true)
        })
    })
})

