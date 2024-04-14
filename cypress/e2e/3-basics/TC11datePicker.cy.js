/// <reference types = "cypress"/>

describe('Datepicker in cypress', function () {

    it('Manage datePicker in cypress', function () {

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')

        let dayDate = new Date()
        // let day = dayDate.getDate()               // current date
        // cy.log(day)

        dayDate.setDate(dayDate.getDate() + 350)
        let fDate = dayDate.getDate()
        cy.log(fDate)
    
        // let month = dayDate.getMonth()         // current month index
        // let month = dayDate.getMonth() + 1     // current month number 
        // let month = dayDate.toLocaleString('default',{month:"short"})          // gives month in short form
        let month = dayDate.toLocaleString('default', { month: "long" })              // gives month in full form
        cy.log(month)

        let year = dayDate.getFullYear()
        cy.log(year)

        // let currentYr = `${day} ${month} ${year}`
        // cy.log(currentYr)

        cy.get('#datepicker').click()

        // for year selection
        function selectMonthYear() {
            cy.get('.datepicker-switch').first().then(function (currentDate) {
                // cy.log(currentDate.text())
                if (!currentDate.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectMonthYear();

                }
            }).then(function () {
                cy.get('.datepicker-switch').first().then(function (currentDate) {
                    // cy.log(currentDate.text())
                    if (!currentDate.text().includes(month)) {
                        cy.get('.next').first().click()
                        selectMonthYear()
                    }

                })

            })
        }
        // selectMonthYear()

        function selectFutureDate() {
            cy.log(fDate)
            cy.contains(fDate).click()

        }
        selectMonthYear()
        selectFutureDate()
    })
})