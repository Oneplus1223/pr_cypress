import {homePageLocators} from "../../fixtures/homepage";
import {searchpageLocators} from "../../fixtures/searchpage";

let getUrl
describe('testing make my trip', () => {
    it('launch the site', () => {
        cy.viewport(2000, 1500)
        cy.visit(Cypress.config().baseUrl)
        cy.contains('One Way').should('be.visible')
        cy.setText(homePageLocators.fromDropdown, "chennai")
        cy.setText(homePageLocators.toDropdown, "Mumbai")
        cy.get(homePageLocators.nextdate)
            .should('be.visible')
            .click()
        cy.get(homePageLocators.searchbutton)
            .click()

        cy.url({timeout: 10000}).should('include', 'search/result/flight')
        cy.url().then(url => {
            getUrl = url
            cy.log('Current URL is : ' + getUrl)
        })
        // cy.get('#ui-id-1').find('#ui-id-610').eq(1).contains('Chennai(MAA)').click()

    })
    it('asserting next page headers', () => {
        cy.visit(getUrl)
        cy.get(searchpageLocators.bookButton)
            .should('be.visible')
        cy.minPrice(searchpageLocators.price)
    })
})