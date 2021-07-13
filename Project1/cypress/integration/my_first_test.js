///<reference types="cypress" />

it('google test', function(){
    cy.visit('https://www.google.com')
    cy.wait(1000)
    cy.get('#L2AGLb').click()
    cy.get('.gLFyf').type("Test automation cronos{enter}")
})