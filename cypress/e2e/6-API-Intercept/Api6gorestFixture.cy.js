import gorestPayload from '../../fixtures/gorestPayload.json'
/// <reference types="cypress"/>

describe('Gorest Api request using fixture data', function () {
    let token = '683ebbf86a12f1df0f7fe5ec14453a996d052a8914adb93b453324bbb669cd92'
    gorestPayload.post.email = `rahane.pooja@${Math.floor(Math.random() * 10000) + 1}gmail.com`
    gorestPayload.put.email =  `lokhande.pooja@${Math.floor(Math.random() * 10000) + 1}gmail.com`

    let id = undefined

    it.only('Gorest POST request', function () {
        cy.log(gorestPayload.post)

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: gorestPayload.post,
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(function(response){
            cy.log(response)
            expect(response.status).to.equal(201)
            cy.log(response.body.id)
            id = response.body.id
        })
    })

    it.only('Gorest PUT request',function(){
        cy.log(gorestPayload.put)
        cy.request({
            method: 'PUT',
            url: `https://gorest.co.in/public/v2/users/${id}`,
            body: gorestPayload.put,
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(function(response){
            cy.log(response)
            expect(response.status).to.eq(200)
        })
    })
})


