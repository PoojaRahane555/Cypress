/// <reference types="cypress"/>

describe('intercept in cypress', function () {

    it('wait with cy.intercept and data mapping', function () {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        })
            .as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ request, response }) {
            cy.log(response.body.body)
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })

    it.only('wait with cy.intercept and stub network with mock', function () {
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }, {
            body: {
                email: "poojalokhande55@gmail.com",
                id: 1,
                name: "Pooja Rahane",
                postId: 423701,
                body: 'I am learning cypress intercept concept.'
            }
        })
         .as('getComments')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComments').then(function(response){
            cy.log(response)
            expect(response.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('have.text',response.response.body.body)
        })
    })
})