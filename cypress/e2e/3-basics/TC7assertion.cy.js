/// <reference types="cypress"/>

describe('Verify the assertions',function(){

    this.beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })

    it('Implicit assertion',function(){
        // implicit assertion:
        cy.get('#tea').should('have.text','Tea')
        cy.get('#tea').should('have.id','tea')

        // explicit assertion:
        cy.get('#tea').then(function(el){
            cy.log(el)
            cy.log(el.text())
            expect(el.text()).eq('Tea')
        })
    })

    it.only('loop on elements',function(){

        let expected = ["Coffee","Tea","Milk","Espresso","Sugar"]
        cy.get('.traversal-drinks-list').children().each(function(el,index){
            cy.log(el)
            cy.log(el.text())
            expect(el.text()).to.eq(expected[index])
        })
    })
})