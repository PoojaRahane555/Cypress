/// <reference types="cypress"/> 

describe('Verify the Contact Us form',function(){

    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('Login with valid data',function(){
        cy.LoginForm('Pooja',"Lokhande","poojalokhande63836@gmail.com","Hello")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('Login with Invalid data',function(){
        cy.LoginForm('Pooja','Lokhande','poojalokhande.gamil.com','Hiii')
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain','Error: Invalid email address')
    })

    it('Login with reset button',function(){
        cy.LoginForm('Pooja',"Lokhnade","poojalokhande63836@gmail.com","Good Morning")
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('have.text', '')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
    })
})