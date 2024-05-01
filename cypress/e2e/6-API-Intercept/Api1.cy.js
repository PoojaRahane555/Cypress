/// <reference types = "cypress"/>

describe('API testing', function () {

    it('verify the status code for GET request', function () {
        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: "GET"
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })
    })

    it('verify the status code for POST request', function () {
        cy.request({
            url:"https://reqres.in/api/users",
            method:"POST",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(response){
            expect(response.status).to.eq(201)
        })
    })

    it('verify the status code for PUT request', function () {
        cy.request({
            url:"https://reqres.in/api/users/2",
            method:"PUT",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function(response){
            expect(response.status).to.eq(200)
        })
    })

    it('verify the status code for DELETE request', function () {
        cy.request({
            url:"https://reqres.in/api/users/2",
            method:"DELETE"
        }).then(function(response){
            expect(response.status).to.eq(204)
        })
    })

})