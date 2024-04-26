/// <reference types="cypress"/>

describe('Iframe in cypress', function () {

    it('Iframe by using jquery method', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function ($iframe) {
            // cy.log($iframe)
            cy.log($iframe.contents())
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('iframeBody')

            cy.get('@iframeBody').contains('Home').should('have.attr', 'href')
            // cy.get('@iframeBody').find('a[href= "index.html"]').should('have.text',"Home") 
        })
    })

    it('Iframe by using Javascript method', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function (iframe) {
            // cy.log(iframe)
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('iframeBody')
            cy.get('@iframeBody').find('a[href= "index.html"]').should('have.text',"Home") 
        })
    })

    it.only('iframe by using js',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        let frame = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        frame.find('a[href= "index.html"]').should('have.text',"Home")
    })
})