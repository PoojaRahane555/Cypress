import 'cypress-file-upload';
/// <reference types = "cypress"/>

describe('File Upload',function(){

    it.only('Simple file upload 1',function(){

        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile('File no 1.pdf')
        cy.on('window:alert',function(text){
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.get('#submit-button').click()
        cy.url().should('contain','https://webdriveruniversity.com/File-Upload/index.html?filename=File+no+1.pdf')
        cy.wait(3000)
    })
})