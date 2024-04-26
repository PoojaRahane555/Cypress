/// <reference types = "cypress"/>

describe('AutoComplete text field',function(){

    it('Verify autoComplete text field',function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list').children().each(function(el){
            // cy.wrap(el.text())
            if(el.text().includes("Apple")){
                cy.wrap(el).click()  
            }
        })
        cy.get('#submit-button').click() 
        cy.url().should('contain',"Apple")
    })
})