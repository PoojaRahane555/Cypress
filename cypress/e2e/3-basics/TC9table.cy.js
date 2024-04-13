/// <reference types="cypress"/>

describe('Tables in cypress',function(){

    function calculateTotalAg(id,expectedTotal){
        let sum = 0
        cy.get(`#t0${id}`).find('tr').each(function(rowF){
            // cy.log(rowF.find('td').last().text())  
            sum = sum + Number(rowF.find('td').last().text())
        })
        .then(function(){
            cy.log(sum)
            expect(sum).to.eq(expectedTotal)
        })
    }

    it('Verify the sum of age for table-one',function(){
        let sum = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function(rowF){
            // cy.log(rowF.find('td').last().text())  
            sum = sum + Number(rowF.find('td').last().text())
        })
        .then(function(){
            cy.log(sum)
            expect(sum).to.eq(159)
        })
    })

    it('Verify the sum of age for table-two',function(){
        let total = 0
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#t02').find('tr').each(function(rowS){
            // cy.log(rowS.find('td').last().text())
            total = total + Number(rowS.find('td').last().text())
        })
        .then(function(){
            cy.log(total)
            expect(total).to.eq(163)
        })

    })

    it.only('Vefiry the sum of age for table-one using function',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        calculateTotalAg(1,159)
    })

    it.only('Vefiry the sum of age for table-one using function',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        calculateTotalAg(2,163)
    })
})
