/// <reference types="cypress">

describe('Verify API GET, POST, PUT, DELETE request', function () {

    it('Verify Api GET request', function () {
        let user = 'Byron'
        let flagUser = false
        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET'
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.gte(50)
            expect(response.statusText).to.eq("OK")
            expect(response.body.data[0]).to.have.keys(['id', 'email', 'first_name', 'last_name', 'avatar'])
            expect(response.body.per_page).to.eq(response.body.data.length)

            response.body.data.forEach(element => {
                expect(element.first_name).not.have.null
                expect(element.last_name).not.have.null
                expect(element.id).not.have.null
                expect(element.email).not.have.null
                expect(element.avatar).not.have.null
            });

            response.body.data.forEach(el => {
                cy.log(el)
                if (el.first_name == user) {
                    flagUser = true
                }
            })
        }).then(function () {
            expect(flagUser).to.eq(true)
        })
    })

    it('Verify Api POST request', function () {
        let createInfo = {
            "name": "Pooja",
            "job": "Tester"
        }
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: createInfo
        }).then(function (response) {
            cy.log(response)
            cy.log(createInfo)
            expect(response.status).to.eq(201)
            expect(response.duration).to.be.lte(600)
            expect(response.statusText).to.eq("Created")
            expect(response.body).to.have.keys(['id', 'name', 'job', 'createdAt'])
            expect(response.body.name).to.eq(createInfo.name)
            expect(response.body.job).to.eq(createInfo.job)
        })
    })

    it('Verify API PUT request', function () {
        let updateInfo = {
            "name": "Pooja",
            "job": "zion resident"
        }
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'PUT',
            body: updateInfo
        })
            .then(function (response) {
                cy.log(response)
                expect(response.status).to.eq(200)
                expect(response.duration).to.be.lte(550)
                expect(response.statusText).to.eq("OK")
                expect(response.body.name).to.eq(updateInfo.name)
                expect(response.body.job).to.eq(updateInfo.job)
                expect(response.body).to.have.keys(['name', 'job', 'updatedAt'])
                expect(response.body.name).not.have.null
                expect(response.body.job).not.have.null
                expect(response.body.updatedAt).not.have.null
            })
    })

    it.only('Verify API DELETE request', function () {
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: "DELETE"
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(204)
            expect(response.statusText).to.eq("No Content")
            expect(response.body).to.eq("")
        })
    })

})