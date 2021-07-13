///<reference types="cypress" />

it('google test', function(){
    cy.visit('https://www.google.com')
    cy.get('.F4a1l').should('be.visible') //coockie link
    cy.get('#L2AGLb').click()
    cy.get('.gLFyf').type("Test automation cronos{enter}")
})