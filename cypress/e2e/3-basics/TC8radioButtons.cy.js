/// <reference types="cypress"/>

describe('Verify radioButtons,checkBoxes,dropDown menu',function(){

    this.beforeEach(function(){
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })

    it('Verify the functionality of radioButtons',function(){
        cy.get('input[value="green"]').as('greenButton')
        // click()
        // cy.get('@greenButton').click()
        // cy.get('@greenButton').should('be.checked')

        // check()
        cy.get('@greenButton').check()
        cy.get('@greenButton').should('be.checked')
        cy.get('input[value="yellow"]').should('not.be.checked')

        cy.get('#radio-buttons').children().filter('input[name="color"]').each(function(el){
            // cy.wrap(el).check()
            // cy.wrap(el).should('be.checked')

            cy.wrap(el).click()
            cy.wrap(el).should('be.checked')
        })
    })

    it.only('Verify the functionality of checkBoxes',function(){
        // click()
        // cy.get('input[value="option-1"]').click()
        // cy.get('input[value="option-1"]').should('be.checked')

        // check()
        // cy.get('input[value="option-2"]').check()
        // cy.get('input[value="option-2"]').should('be.checked')

        cy.get('input[type="checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })
})