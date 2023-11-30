describe('Cypress Framework', function()
{
    before(() => {
        // root-level hook
        // runs once before all tests in the block
        cy.fixture('example').then(function(tstData){
            this.data=tstData
        })

      })


   it('My TC with before hook', function()
   {

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)
    //requirement: validate if value entered is same as name value entered
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
   })

})