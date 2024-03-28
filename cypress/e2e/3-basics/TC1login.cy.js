/// <reference types="cypress"/>

describe('Validate the login functionality',function(){

    it('Login with valid credential',function(){
        // Arrangement:
        cy.visit('https://www.saucedemo.com/v1')
        // Action:
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        // Assertion:
        cy.get('.app_logo').should('be.visible')
        cy.wait(5000)
    })

    it.only('Login with Invalid credential',function(){
        // Arrangement:
        cy.visit('https://www.saucedemo.com/v1')
        // Action:
        cy.get('#user-name').type('abc')
        cy.get('#password').type('abc56')
        cy.get('#login-button').click()
        // Assertion:
        cy.get('[data-test="error"]').should('be.visible')
    })
})