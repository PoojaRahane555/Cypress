/// <reference types="cypress"/>

describe('Handling js alert',function() {

    this.beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Handling js simple alert',function(){
        cy.on('window:alert',function(text){
            cy.expect(text).to.eq('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')  
    })

    it('Handling js confirm alert',function(){
        cy.on('window:confirm',function(text){
            // cy.expect(text).to.eq('I am a JS Confirm')
            // return true
            return false
            
        })
        cy.contains('Click for JS Confirm').click()
        // cy.get('#result').should('have.text','You clicked: Ok')
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('Handling js prompt alert',function(){
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('Hello everyone...')
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('have.text','You entered: Hello everyone...')
        })
    })

    it.only('Handling js prompt alert',function(){
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns(null)
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('have.text','You entered: null')
        })
    })
     
})