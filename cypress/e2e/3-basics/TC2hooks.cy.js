///<reference types = "cypress"/>

before(function(){
    cy.log("I will execute first...")
})

beforeEach(function(){
    cy.log("I will execute before every test case....")
})

it('test case one',function(){
    cy.log("test case A.....")
})

it('test case two',function(){
    cy.log("test case B.....")
})

afterEach(function(){
    cy.log("I will execute after every test case")
})

after(function(){
    cy.log('I will execute last....')
})