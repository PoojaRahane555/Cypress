/// <reference types="cypress"/>

describe('Verify traverse methods in cypress',function(){

    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    })

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text','Fruits')
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text','Lentils')
    })

    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(4).should('have.text','Cherries')
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text','Figs')
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text','Asparagus')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').siblings().should('have.length',5)
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)  
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-other-states').prevAll().should('have.length',5)
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Button-1').nextAll().should('have.length',3)
    })

    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn-outline-danger').parent().should('have.attr','class','traversal-button-states')
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#contact_me').find('input[name="first_name"]').type("Pooja")
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#coffee').should('have.length',3)
    })

    it('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').parents().should('have.class','thumbnail')
    })

    it('To get the closest ancestor DOM element, use the .closest() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#types-of-jobs').closest('.thumbnail').should('have.length',1)  
    })

    it('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#types-of-jobs').parentsUntil('.traversal-drinks-list').should('have.length',6)
    })

})