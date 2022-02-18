describe('testing make my trip',()=> {
    it('launch the site',()=>
    {
     cy.viewport(2000,1500)
        cy.visit('https://www.easemytrip.com/')
    })
})