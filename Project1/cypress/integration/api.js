///<reference types="cypress" />

    it('POST',function(){
        const item = {
            "id": 150,
            "category": {
              "id": 1,
              "name": "Cats"
            },
            "name": "Jos",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }
        cy.request('POST', 'https://petstore3.swagger.io/api/v3/pet', item).then((response) => {
        expect(response).to.have.property('status',200)
        })
    })

    it('GET',function(){
        cy.request('https://petstore3.swagger.io/api/v3/pet/150').then((response) => {
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('id',150)
        })
    })

    it('PUT', function(){
        const item= {
            "id":150,
            "name": "doggieJos",
            "category": {
              "id": 1,
              "name": "Dogs"
            },
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "unavailable"
          }
          cy.request('PUT','https://petstore3.swagger.io/api/v3/pet', item).then((response) => {
            expect(response).to.have.property('status',200)
        })
    })
    it('DELETE',function(){
        cy.request('DELETE','https://petstore3.swagger.io/api/v3/pet/150').then((response) => {
            expect(response).to.have.property('status',200)
        })
    })