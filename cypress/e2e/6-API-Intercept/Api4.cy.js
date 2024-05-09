/// <reference types="cypress"/>

describe('Gorest Api Get,Post,Put,Delete request', function () {
    let token = '683ebbf86a12f1df0f7fe5ec14453a996d052a8914adb93b453324bbb669cd92'
    let id = undefined

    it.only('Gorest Post request', function () {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                "name": "Pooja Rahane",
                "gender": "Female",
                "email": `rahane.pooja@${Math.floor(Math.random()*10000)}.com`,
                "status": "active"
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(function(response){
            cy.log(response)
            expect(response.status).to.eq(201)
            cy.log(response.body.id)
            id = response.body.id
        })
        .then(function(){
            cy.request({
                method: 'PUT',
                url:`https://gorest.co.in/public/v2/users/${id}`,
                body:{
                    "name":"Pooja Lokhande", 
                    "email":`lokhande.pooja@${Math.floor(Math.random()*10000) + 1}gmail.com`,
                     "status":"active"
                },
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(function(response){
                cy.log(response)
                expect(response.status).to.eq(200)
            })
            .then(function(){
                cy.request({
                    method: 'DELETE',
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(function(response){
                    cy.log(response)
                })
            })
        })
    })

    it('Gorest Get request',function(){
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
        .then(function(response){
            cy.log(response)
            expect(response.status).to.eq(200)
        })
    })
})