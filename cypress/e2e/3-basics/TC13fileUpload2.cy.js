/// <reference types ="cypress"/>

describe('File upload',function(){

    it('Single file upload using selectFile method',function(){
        
        cy.on('window:alert',function(str){
            expect(str).to.eq('Your file has now been uploaded!')
            return true

        })
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        // using absolute path
        cy.get('input[type="file"]').selectFile('C:\\Users\\Lenovo\\Desktop\\CYPRESS\\cypress\\fixtures\\File no 1.pdf')
        cy.get('input[type="submit"]').click()
        cy.url().should('contain','File no 1.pdf')
        cy.wait(3000)
    })

    it.only('Multiple file upload using selectFile method',function(){

        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/salesorders/new')
        // using relative path
        cy.get('input[type="file"]').first()
        .selectFile(["cypress\\fixtures\\File no 1.pdf","cypress\\fixtures\\example.json","cypress\\fixtures\\contact.json"])
        cy.get('#ember378').should('contain','3')
        cy.wait(4000)
    })
})