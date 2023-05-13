describe('My First Test Suite', function()
{
   it('My First Test Case', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //Handles child tab with Cypress invoke and jQuery function
    cy.get('#opentab').invoke('removeAttr', 'target').click()




   })

})