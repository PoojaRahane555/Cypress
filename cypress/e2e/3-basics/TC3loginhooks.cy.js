/// <reference types="cypress"/>

describe('Validate Login form',function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/v1')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Login with Valid credential',function(){
        cy.get('.app_logo').should('be.visible')
    })
})