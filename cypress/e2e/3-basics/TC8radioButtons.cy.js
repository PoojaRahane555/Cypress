/// <reference types="cypress"/>

describe('Verify radioButtons,checkBoxes,dropDown menu',function(){

    this.beforeEach(function(){
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })

    it('Verify the functionality of radioButtons',function(){
        cy.get('input[value="green"]').as('greenButton')
        // click()
        // cy.get('@greenButton').click()
        // cy.get('@greenButton').should('be.checked')

        // check()
        cy.get('@greenButton').check()
        cy.get('@greenButton').should('be.checked')
        cy.get('input[value="yellow"]').should('not.be.checked')

        cy.get('#radio-buttons').children().filter('input[name="color"]').each(function(el){
            // cy.wrap(el).check()
            // cy.wrap(el).should('be.checked')

            cy.wrap(el).click()
            cy.wrap(el).should('be.checked')
        })
    })

    it('Verify the functionality of checkBoxes',function(){
        // click()
        cy.get('input[value="option-1"]').click()
        cy.get('input[value="option-1"]').should('be.checked')

        // check()
        cy.get('input[value="option-2"]').check()
        cy.get('input[value="option-2"]').should('be.checked')

    })

    it('Verify the functionality of checkBoxes by using loop',function(){
        cy.get('input[type="checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })

    it('Verify the functionality of checkBoxes by using click',function(){
        cy.get('input[type="checkbox"]').each(function(el,index){
            if(index != 2){
                cy.wrap(el).click()
            }  
        })
    })

    it('Verify the functionality of checkBox with check selecting multiple elements together',function(){
        cy.get('input[type="checkbox"]').check(["option-1","option-2","option-3","option-4"])  
    })

    it("Selecting the value from dropDown menu",function(){
        // Text:
        // cy.get('#dropdowm-menu-1').select('Python')

        // value:
        cy.get('#dropdowm-menu-1').select('python')
    })

    it('Selecting the dropDown menu together',function(){
        let selectMenu = ["sql","eclipse",'javascript']
        cy.get('.section-title').first().find('select').each(function(el,index){
            cy.wrap(el).select(selectMenu[index])
        })
    })

    it.only('Verify enabled,disabled and selected radio button',function(){
        cy.get('input[value="lettuce"]').should('not.be.disabled')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.checked')

    })
})