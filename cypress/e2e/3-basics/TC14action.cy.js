/// <reference types = "cypress"/>

describe('Drag and Drop', function () {

    it('Drag and drop draggable item', function () {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove', { which: 1 }).trigger('mouseup', { force: true })
        cy.get('#droppable').should('contain', 'Dropped!')
    })

    it('Drag and drop draggable item', function () {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').trigger('dblclick').should('have.class', 'double')
        // cy.get('#double-click').dblclick().should('have.class','double')
    })

    it('Right click', function () {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        // cy.get('.context-menu-one').first().rightclick()
        cy.get('.context-menu-one').first().trigger('contextmenu')
        cy.get('.context-menu-list.context-menu-root').should('be.visible')
    })

    it('Mouse Over', function () {
        cy.visit('https://demo.opencart.com/')
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible')
        cy.get('#narbar-menu > ul > li:nth-child(1) > a').trigger('mouseover').click()
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible')
    })

    it('scrollInView', function () {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').scrollIntoView({ duration: 2000 })

    })

    it.only('click and hold', function () {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#click-box').find('p').should('have.text', 'Click and Hold!')
        cy.get('#click-box').trigger('mousedown', { button: 0 })
        cy.get('#click-box').should('contain', 'Well done')
        cy.get('#click-box').trigger('mouseup', { button: 0 })
        cy.get('#click-box').should('contain', 'Dont release me!!!')
    })

    it.only('Click and holds', function () {
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#click-box').trigger('mousedown').should('contain', 'Well done!')
        cy.get('#click-box').trigger('mouseup').should('contain', 'Dont release me!!!')
        cy.get('#div-hover > div.dropdown.hover > button').trigger('mouseover')
        cy.get('#div-hover > div.dropdown.hover > div > a').should('exist')
    })
})