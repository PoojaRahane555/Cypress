/// <reference types = "cypress"/>

describe('Dropdown,Checkboxes and Radiobuttons',function(){
    
    it('select option from dropDown',function(){
        // arrangement
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // action
        cy.get('#dropdowm-menu-1').select('JAVA')
        // assertion
        cy.get('#dropdowm-menu-1').should('have.value','java')
        // or
        cy.get('#dropdowm-menu-2').select('Eclipse')
        cy.get('#dropdowm-menu-2').should('have.value','eclipse')
    })

    it('should select a checkbox',function(){
        // arrangement
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // action: click()
        cy.get('input[value="option-1"]').click()
        // assertion
        cy.get('input[value="option-1"]').should('be.checked')
        // action: check()
        cy.get('input[value="option-3"').check()
        cy.get('input[value="option-3"').should('be.checked')
        // action: uncheck()
        cy.get('input[value="option-3"').uncheck()
        cy.get('input[value="option-3"').should('not.be.checked')
    })

    it('should select radiobuttons',function(){
        // arrangement
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // action:
        cy.get('input[value="green"]').click()
        // assertion
        cy.get('input[value="green"]').should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })
})
