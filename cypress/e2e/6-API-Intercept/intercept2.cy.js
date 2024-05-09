/// <reference types="cypress">

describe('Verify Get Comment, Post Comment, Update Comment using intercept',function(){

    it('Verify Get Comment',function(){
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(response){
            cy.log(response.response.body.body)
            cy.get('.network-comment').should('have.text',response.response.body.body)
        })
    })

    it('Verify Post Comment',function(){
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments',
            method: 'POST'
        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function(response){
            cy.log(response)
            expect(response.response.statusCode)
            expect(response.response.statusCode).to.eq(201)
            cy.get('.network-post-comment').should('have.text','POST successful!')
        })
    })

    it('Verify Update Comment',function(){
        cy.intercept({
            url:'https://jsonplaceholder.cypress.io/comments/1',
            method:'PUT'
        }).as('updateComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then(function(response){
            cy.log(response)
            cy.log(response.response.statusCode)
            cy.log(response.response.statusMessage)
            expect(response.response.statusCode).to.eq(200)
            expect(response.response.statusMessage).to.eq('OK')
        })
    })

})