/// <reference types="cypress" />

describe("Verify the ContactUs form", function () {

    it.only('Verify the heading for ContactUs form',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name=contactme]').should('be.visible').and('have.text','CONTACT US')
    })

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