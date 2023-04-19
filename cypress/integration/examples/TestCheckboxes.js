describe('My First Test Suite', function()
{
   it('My First Test Case', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //requirement: check option1, assert if checked, assert if value is option1
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

    //requirement: uncheck option1, assert if unchecked
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    //requirement: check multiple checkboxes, option 2 and option 3, assert if checked, assert if value is option1
    //check() accepts arguments array of value property passed
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])




   })

})