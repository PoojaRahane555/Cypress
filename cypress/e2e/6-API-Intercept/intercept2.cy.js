///<reference types = "cypress"/>

describe('Intercept in cypress',function(){

    it('Get comment',function(){
        cy.intercept({
            method : 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        })
        .as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(response){
            cy.log(response)
            expect(response.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('have.text',response.response.body.body)
        })
    })

    it.only('API request',function(){
        let text = undefined
        cy.request({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method:"GET"
        })
        .then(function(response){
            text = response.body.body
        })
        .then(function(){
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.get('.network-comment').should('have.text',text)
        })
    })
}) 