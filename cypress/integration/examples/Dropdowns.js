describe('My First Test Suite', function()
{
   it('My First Test Case', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    /* Handling Static dropdowns */
    //requirement: select option3, assert if value is option3
    cy.get('#dropdown-class-example').select('option3').should('have.value','option3')






   })

})