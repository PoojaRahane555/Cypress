// import Login from "../../POMOBJ/OrgHrmLogin";
import Login from "../../POMOBJ/OrgHrmLogin2"
/// <reference types="cypress"/>

describe('OrangeHrm Login',function(){

    it('OrangeHrm Login without using POM',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })

    it('OrangeHrm Login using POM',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        let ln = new Login()
        ln.setUsername('Admin')
        ln.setPassword('admin123')
        ln.clickSubmit()
        ln.verifyLogin()
    })

    it('Orangehrm Login using pom and fixture data',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangeHrm').then(function(data){
            let ln = new Login()
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
    })
})