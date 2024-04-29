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

    it('iframe by using js',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        let frame = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        frame.find('a[href= "index.html"]').should('have.text',"Home")
    })

    // by using command.js
    it('iframe by using command.js',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.getIframeBody('frame').find('a[href= "index.html"]').should('have.text',"Home")
    })

    it.only('iframe 2nd example - using command.js',function(){
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.getIframeBody('mce_0_ifr').find('p')
        .should('have.text','Your content goes here.')
        cy.getIframeBody('mce_0_ifr').find('p').type(`{ctrl+a}{ctrl+b}`)
        cy.getIframeBody('mce_0_ifr').find('p').should('have.text','Your content goes here.')  
    })

})