/// <reference types="cypress"/>

describe('',function(){

    it('Verify the title of the page',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.title().should('contain','WebDriverUniversity.com')
    })

    it('Verify the current url',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.url().should('contain','webdriveruniversity')
    })

    it('How to log on cypress test runner',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.log('before radio button')
        cy.get('input[value="green"]').click()
        cy.contains('Green').should('be.visible')
        cy.get('label').contains('Option 1').should('be.visible')
        cy.contains('label','Option 2').should('be.visible')
        cy.log('after radio button')
    })

    it.skip('How to reload the page',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.reload()
        cy.wait(3000)
        cy.log('after 3 sec.')
    })
})