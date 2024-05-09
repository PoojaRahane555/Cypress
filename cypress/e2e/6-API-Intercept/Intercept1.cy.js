/// <reference types="cypress"/>

describe('Learning API intercept request', function () {

    it('verify GET intercept request', function () {

        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function (response) {
            cy.log(response)
            expect(response.response.statusCode).to.eq(200)
            cy.get(".network-comment").should('contain', 'laudantium')
        })

    })
})