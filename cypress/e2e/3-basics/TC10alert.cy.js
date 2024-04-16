/// <reference types="cypress"/>

describe('Handling js alert',function() {

    this.beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Handling js simple alert',function(){
        cy.on('window:alert',function(text){
            expect(text).to.eq('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')  
    })

    it('Handling js confirm alert',function(){
        cy.on('window:confirm',function(text){
            // expect(text).to.eq('I am a JS Confirm')
            // return true
            return false
            
        })
        cy.contains('Click for JS Confirm').click()
        // cy.get('#result').should('have.text','You clicked: Ok')
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it.only('Handling js prompt alert - ok', function () {
        // let firstName = "Pooja"

        cy.on('window:prompt',function(text){
            expect(text).to.eq('I am a JS prompt')
            return Pooja
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('have.text','You entered: Pooja')

    })

    it('Handling js prompt alert for ok',function(){
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('Hello everyone...')
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('have.text','You entered: Hello everyone...')
        })
    })

    it('Handling js prompt alert for cancel',function(){
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns(null)
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('have.text','You entered: null')
        })
    })
     
})