/// <reference types ="cypress"/>

describe('verify the API GET,POST,PUT,DELETE', function () {

    it('verify the total number of user per page', function () {
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        })
            .then(function (response) {
                expect(response.body.data.length).to.equal(response.body.per_page)
            })
    })

    it('verify the user with name george', function () {
        let userName = "George"
        let flagUser = false

        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        })
            .then(function (response) {
                response.body.data.forEach(element => {
                    if (element.first_name == userName) {
                        flagUser = true
                        return
                    }

                });
            })
            .then(function () {
                expect(flagUser).to.equal(true)
            })
    })

    it('verify the POST request', function () {
        let info = {
            "name": "morpheus",
            "job": "leader"
        }

        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "POST",
            body: info
        })
            .then(function (response) {
                cy.log(response.body)
                expect(response.body).to.have.keys(["name","job","id","createdAt"])
                expect(response.body.name).to.eq(info.name)
                expect(response.body.job).to.eq(info.job)
            })

    })


    it('verify the PUT request', function () {
        let info2 = {
            "name": "morpheus",
            "job": "zion resident"
        }
        cy.request({
            url : "https://reqres.in/api/users/2",
            method : "PUT",
            body : info2
        })
    })

})