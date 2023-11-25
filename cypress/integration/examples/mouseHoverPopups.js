describe('My Seventh Test Suite', function()
{
   it('Handling Mouse Hover Popups', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    /*  jQuery method show to hidden selected elements
        if requirement is to verify the pop up elements when you hover over */

    //cy.get('div.mouse-hover-content').invoke('show') 
    //cy.contains('Top').click()
   
    /* Uses force click option action on invisible or visible element*/
    
    cy.contains('Top').click({ force: true })
    cy.url().should('include','top')

    })
})