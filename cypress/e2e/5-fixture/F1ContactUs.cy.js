import contactUsLogin from "../../fixtures/contactUsLogin.json"
/// <reference types="cypress"/>

let Pooja = {
    firstName: "Pooja",
    lastName: "Lokhande",
    email: "poojarahane56@gmail.com",
    message: " by using object "
}

let Manager = [
    {
        firstName: "Kanvi",
        lastName: "Lokhande",
        email: "kanvilokhande5656@gmail.com",
        message: " by using array of object-one "
    },
    {
        firstName: "Kanchan",
        lastName: "Khilari",
        email: "kanchankhilari18@gmail.com",
        message: " by using array of object-two "
    },
    {
        firstName: "Amrut",
        lastName: "Rahane",
        email: "amrutrahane51@gmail.com",
        message: " by using array of object-three "
    }
]


describe('fixtures in cypress', function () {

    before(() => {
        cy.fixture('contact').as('data')
    })

    beforeEach(function () {
        cy.fixture('contactUsLogin').then(function (userdata) {
            this.userdata = userdata
        })
    })

    it('TC-01:Login of contactUs form by using object', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(Pooja.firstName)
        cy.get('input[name="last_name"]').type(Pooja.lastName)
        cy.get('input[name="email"]').type(Pooja.email)
        cy.get('textarea[name="message"]').type(Pooja.message)
    })

    Manager.forEach(function (el, index) {
        it('TC-02:Login of contactUs form by using array', function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
        })
    })

    Manager.forEach(function (el, index) {
        it(`TC-03:Login of contactUs form by using array data - ${index}`, function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
        })
    })

    it('TC-04:Reading fixture file for only one testcase', function () {
        cy.fixture('contact').then(function (data) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
        })
    })

    it('TC-05:Reading fixtre file for object-1 from beforeEach', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.userdata[0].firstName)
        cy.get('input[name="last_name"]').type(this.userdata[0].lastName)
        cy.get('input[name="email"]').type(this.userdata[0].email)
        cy.get('textarea[name="message"]').type(this.userdata[0].message)
    })

    it('TC-06:Reading fixtre file for object-2 from beforeEach', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.userdata[1].firstName)
        cy.get('input[name="last_name"]').type(this.userdata[1].lastName)
        cy.get('input[name="email"]').type(this.userdata[1].email)
        cy.get('textarea[name="message"]').type(this.userdata[1].message)
    })

    it('TC-07:Reading fixtre file using before and arrow function', function () {
        cy.get('@data').then(function (data) {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
        })
    })

    it("Reading fixture file from contactUsLogin with object-1 using import", function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(contactUsLogin[0].firstName)
        cy.get('input[name="last_name"]').type(contactUsLogin[0].lastName)
        cy.get('input[name="email"]').type(contactUsLogin[0].email)
        cy.get('textarea[name="message"]').type(contactUsLogin[0].message)
    })

    it.only("Reading fixture file from contactUsLogin with object-1 using import", function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(contactUsLogin[1].firstName)
        cy.get('input[name="last_name"]').type(contactUsLogin[1].lastName)
        cy.get('input[name="email"]').type(contactUsLogin[1].email)
        cy.get('textarea[name="message"]').type(contactUsLogin[1].message)
    })
})