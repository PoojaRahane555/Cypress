import 'cypress-file-upload';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('LoginForm',(fn,ln,eml,comt)=>{
    // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('input[name="first_name"]').type(fn)
    cy.get('input[name="last_name"]').type(ln)
    cy.get('input[name="email"]').type(eml)
    cy.get('textarea[name="message"]').type(comt)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })