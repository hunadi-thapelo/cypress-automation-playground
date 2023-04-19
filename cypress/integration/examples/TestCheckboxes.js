describe('My First Test Suite', function()
{
   it('My First Test Case', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //requirement: check option1, assert if checked, assert if value is option1
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    
    




   })

})