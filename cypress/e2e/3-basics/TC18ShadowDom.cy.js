/// <reference types="cypress" />

describe('Verify the ShadowDom element', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    
    it('Firstway to get element in shadowDom', function () {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        //cy.get('#pizza').should('be.visible')   //can not get element due shadow dom

        cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Welcome happy face')

        // change for a particular testcase
        // cy.get('#pizza',{includeShadowDom:true}).should('be.visible').type("hello")
    })

    it.only('SecondWay to get element in shadowDom',function(){
        // add to cypress.config => includeShadowDom:true
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#pizza').type("hello").should('be.visible')
        cy.wait(5000)
    })

    it('ThirdWay to get element in shadowDom',function(){
        // change for a particular testcase
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#pizza' ,{includeShadowDom:true}).type("hello").should('be.visible')
        cy.wait(5000)
    })
})