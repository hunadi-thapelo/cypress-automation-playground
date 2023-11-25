describe('My Seventh Test Suite', function()
{
   it('Handling Mouse Hover Popups', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    //jQuery method show to hidden selected elements
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')

    })
})