/// <reference types="cypress"/>
let authToken =
    describe('Order simple book Api', function () {

        before('Access the token with POST request', function () {
            cy.request({
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/api-clients',
                body: {
                    "clientName": "Pooja",
                    "clientEmail": `poojalokhande${Math.floor(Math.random() * 1000)}@gmail.com`
                }
            })
                .then(function (response) {
                    cy.log(response)
                    authToken = response.body.accessToken
                })
        })

        before('Submit the order', function () {
            cy.request({
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/orders',
                body: {
                    bookId: 1,
                    customerName: "John"
                },
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': authToken
                }
            })
            .then(function(response){
                cy.log(response)
                expect(response.status).equal(201)
                expect(response.body).to.have.property('created',true)
            })
        })

        it.only('list of books',function(){
            cy.request({
                method: 'GET',
                url: 'https://simple-books-api.glitch.me/books',
                // body:{
                //     bookId:  1,
	            //     customerName:  "John"
                // },
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': authToken
                }
            })
            .then(function(response){
                cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.body).has.length(6)
            })
        })
    })