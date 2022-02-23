declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * this is used for sending input for textbox
         * @example  cy.setText(homePageLocators.fromDropdown,"chennai")
         */
        setText(Locator: string, inputText: string): Chainable<any>

        /**
         * this is for getting price from list
         * @example cy.minPrice(searchpageLocators.price)
         * @param Locator
         */
        minPrice(Locator: string): Chainable<any>

        /**
         * this is for selection dropdown options
         *@example  cy.minPrice(searchpageLocators.price)
         */
        dropDownSelect(dropDownLocator: string, optionLocat: string, lang: string): Chainable<any>

    }


}