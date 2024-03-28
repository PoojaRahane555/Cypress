/// <reference types="cypress" />

describe("verify the contact us form", function () {

    it("verify contact us form with valid data", function () {
        // arrangement
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // action
        cy.get('input[name="first_name"]').type("Pooja")
        cy.get('input[name="last_name"]').type("Lokhande")
        cy.get('input[name="email"]').type("poojalokhande63836@gmail.com")
        cy.get('textarea[name="message"]').type("I am learning cypress")
        cy.get('input[type="submit"]').click()
        // Assertion:
        cy.get('h1').should('be.visible')
    })

    it('verify contact us form with invalid data', function () {
        // arrangement
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // action
        cy.get('input[name="first_name"]').type("Pooja")
        cy.get('input[name="last_name"]').type("Lokhande")
        cy.get('input[name="email"]').type("poojalokhande6383gmail.com")
        cy.get('textarea[name="message"]').type("I am learning cypress")
        cy.get('input[type="submit"]').click()
        // Assertion:
        cy.get('body').should('contain', 'Error: Invalid email address')
    })

    it('verify contact us form for reset button functionality',function(){
        // arrangement
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // action
        cy.get('input[name="first_name"]').type("Pooja")
        cy.get('input[name="last_name"]').type("Lokhande")
        cy.get('input[name="email"]').type("poojalokhande63836@gmail.com")
        cy.get('textarea[name="message"]').type("I am learning cypress")
        cy.get('input[type="reset"]').click()
        // Assertion
        cy.get('input[name="first_name"]').should('have.text',"")
    })
})