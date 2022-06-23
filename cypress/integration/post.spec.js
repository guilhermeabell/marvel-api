

describe('POST /characters', function(){

    before(function(){

        cy.setToken()
        cy.back2ThePast()
    })


    it('deve cadastrar um personagem', function(){

        const character ={
            name : 'Erik Magnus Lehnsherr',
            alias : 'Magneto',
            team : ['Irmandade'],
            active : true
        } 

          cy.postCharacter(character)
              .then(function(response){
                expect(response.status).to.eql(201)
                cy.log(response.body.character_id)
                expect(response.body.character_id.length).to.eql(24)
              })
          })  
    })



    context('quando o personagem já existe', function(){

        const character ={
            name : 'Logan',
            alias : 'Wolverine',
            team : ['Xmens'],
            active : true
        } 

        before(function(){
            cy.postCharacter(character)
            .then(function(response){
                expect(response.status).to.eql(201)
            })
        })


        it('não deve cadastrar duplicado', function(){
            cy.postCharacter(character).then(function(response){
                expect(response.status).to.eql(400)
                expect(response.body.error).to.eql('Duplicate character')
            })
        })
    })

    context('Com exceção da idade, todos os campos devem ser obrigatórios', function(){

        var character1 ={
            //name : 'Logan',
            alias : 'Wolverine',
            team : ['Xmens'],
            active : true
        } 

        var character2 ={
            name : 'Logan',
            //alias : 'Wolverine',
            team : ['Xmens'],
            active : true
        } 

        var character3 ={
            name : 'Logan',
            alias : 'Wolverine',
            //team : ['Xmens'],
            active : true
        } 

        var character4 ={
            name : 'Logan',
            alias : 'Wolverine',
            team : ['Xmens'],
            //active : true
        } 

        it('não deve cadastrar sem o name', function(){
            cy.postCharacter(character1).then(function(response){
                expect(response.status).to.eql(400)
                expect(response.body.message).to.eql('Validation failed')
            })
        })

        it('não deve cadastrar sem o alias', function(){
            cy.postCharacter(character2).then(function(response){
                expect(response.status).to.eql(400)
                expect(response.body.message).to.eql('Validation failed')
            })
        })

        it('não deve cadastrar sem o team', function(){
            cy.postCharacter(character3).then(function(response){
                expect(response.status).to.eql(400)
                expect(response.body.message).to.eql('Validation failed')
            })
        })

        it('não deve cadastrar sem o active', function(){
            cy.postCharacter(character4).then(function(response){
                expect(response.status).to.eql(400)
                expect(response.body.message).to.eql('Validation failed')
            })
        })
    })






