// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setText', (Locator, inputText) => {
    cy.get(Locator)
        .type(inputText)
        .should('have.value', inputText)
        .wait(2000)
        .type('{enter}')
})

Cypress.Commands.add('minPrice', (Locator) => {
    let priceArray = []
    cy.get(Locator).each(($el, index, $list) => {
        priceArray[index] = ($el.text());
    })

    cy.wrap(priceArray).then((arr) => {
        cy.log(String(Math.min(...arr)));
    })
})

Cypress.Commands.add('dropDownSelect', (dropDownLocator, optionLocat, lang) => {
    cy.get(dropDownLocator).click()
    cy.get(optionLocat).each(($el, index, $list) => {
        cy.wrap($el).then((val) => {
            if ((val.text()).includes(lang)) {
                cy.wrap($el).click()
            }
        })

    })
})