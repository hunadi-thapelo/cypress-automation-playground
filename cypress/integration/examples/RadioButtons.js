describe('My First Test Suite', function()
{
   it('My First Test Case', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    //Handling radio buttons with assertion

    cy.get('input[value="radio3"]').check().should('be.checked')


   })

})