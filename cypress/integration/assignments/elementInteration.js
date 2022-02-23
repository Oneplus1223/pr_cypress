import {practicePageLocators} from "../../fixtures/practice";

/**
 * 
 * Single Element - getText
 *
 * 
 * getAttribute (using invoke)
 *
 * 
 * visible
 *
 * 
 * present (should('exists'))
 *
 * 
 * multiple elements get text
 *
 * 
 * setText
 *
 * 
 * mouseHover
 *
 * 
 * rightClick
 *
 * getCssValue
 * dbClick
 * checkbox
 * radiobutton
 * currentUrl
 */
describe('Cypress interaction commands',()=>{
    it('getText command for single element',()=>{
        cy.visit(Cypress.env("practiceUrl"))
        cy.get(practicePageLocators.practicePageText)
            .then((text)=>{
                cy.log(text.text())
            })
    })

    it('getAttributeValue command for an element',()=>{
        cy.visit(Cypress.env("practiceUrl"))
        cy.get(practicePageLocators.restApiLink).invoke('attr','href')
            .then((val)=>{
                cy.log(val)
            })
    })

    it('getPropertyValue command for an element',()=>{
        cy.visit(Cypress.env("practiceUrl"))
        cy.get(practicePageLocators.radiobutton).invoke('prop','readOnly')
            .then((val)=>{
                cy.log(val)
            })

        //Assertion
        cy.get(practicePageLocators.radiobutton).invoke('prop','readOnly').should('eq',false)

    })

    it('isVisible command for an element',()=>{
        cy.visit(Cypress.env("practiceUrl"))
               //Assertion
        cy.get(practicePageLocators.showButton).click()
        cy.get(practicePageLocators.displayBox).should('be.visible')
    })

    it('absent command for an element',()=>{
        cy.visit(Cypress.env("practiceUrl"))
        //Assertion
        cy.get(practicePageLocators.hideButton).click()
        cy.get(practicePageLocators.displayBox).should('not.exist')

    })
    it.only('dropdown command for an element', () => {
        //if select tag is not present
        cy.visit(Cypress.env("redBusURL"))
        cy.dropDownSelect(practicePageLocators.dropDown, practicePageLocators.multipleOptions, "English")
    })

    /**
     * Sequence    Notes
     * {{}	Types the literal { key
     * {backspace}	Deletes character to the left of the cursor
     * {del}	Deletes character to the right of the cursor
     * {downarrow}	Moves cursor down
     * {end}	Moves cursor to the end of the line
     * {enter}	Types the Enter key
     * {esc}	Types the Escape key
     * {home}	Moves cursor to the start of the line
     * {insert}	Inserts character to the right of the cursor
     * {leftarrow}	Moves cursor left
     * {movetoend}	Moves cursor to the end of the typeable element
     * {movetostart}	Moves cursor to the start of the typeable element
     * {pagedown}	Scrolls down
     * {pageup}	Scrolls up
     * {rightarrow}	Moves cursor right
     * {selectall}	Selects all text by creating a selection range
     * {uparrow}	Moves cursor up
     */

    it('typing text',()=>{
        cy.visit(Cypress.env("practiceUrl"))
        cy.get("#name").type('prem').type('{backspace}')
            .invoke("prop",'value')
            .should('eq','pre')

    })

    it.skip('Mouse over',()=> {
        cy.visit(Cypress.env("practiceUrl"))
        cy.get(practicePageLocators.mouseOver).scrollIntoView().invoke('show')
    })

    it('getCssValue',()=> {
        cy.visit(Cypress.env("practiceUrl"))
        cy.get(practicePageLocators.mouseOver).scrollIntoView().should('have.css','border-color','rgb(0, 123, 255)')
    })
    it('checkbox',()=> {
        cy.visit(Cypress.env("practiceUrl"))
        cy.get(practicePageLocators.checkBox).click()
            .invoke('prop','checked')
            .should('eq',true)
    })
    it('radiobutton',()=> {
        cy.visit(Cypress.env("practiceUrl"))
        cy.get(practicePageLocators.radiobutton).click()
            .invoke('prop','checked')
            .should('eq',true)
        cy.reload()
    })
})