class Login {

    cssUsername = 'input[name="username"]'
    cssPassword = 'input[name="password"]'
    btnSubmit = 'button[type="submit"]'
    cssVerifyLogin = '.oxd-text--h6.oxd-topbar-header-breadcrumb-module'

    setUsername(username) {
        cy.get(this.cssUsername).type(username)
    }

    setPassword(password) {
        cy.get(this.cssPassword).type(password)
    }

    clickSubmit() {
        cy.get(this.btnSubmit).click()
    }

    verifyLogin() {
        cy.get(this.cssVerifyLogin).should('have.text', 'Dashboard')
    }
}

export default Login;