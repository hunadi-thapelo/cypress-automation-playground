///<reference types= "cypress" />

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
    //requirement: validate if propery min length is correct - simply assertion to check
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength', '2')
     //requirement: validate if propery is in disabled behvaiour
    cy.get('#inlineRadio3').should('be.disabled')

    cy.get(':nth-child(2) > .nav-link').click()
    cy.selectProduct('Samsung Note 8')
    

   })

})