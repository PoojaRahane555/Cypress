/// <reference types = "cypress"/>

describe('HTTP request in cypress',function(){

    it('HTTP GET request',function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status').should('equal',200)
    })

    it('HTTP POST request',function(){
        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body:{
                "title": "Test post",
                "body": "This is http Api request in cypress",
                "userId": 5
            }
        })
        .then(function(response){
            cy.log(response)
            expect(response.status).to.eq(201)
            expect(response.body.id).to.eq(101)
        })
    })

    it.only('HTTP PUT request',function(){
        cy.request({
            method: 'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{

                "title": "Test post",
                "body": "This is http Api request in cypress",
                "userId": 5,
                "id" : 1
            }
        })
        .its('status').should('equal',200)
    })
})