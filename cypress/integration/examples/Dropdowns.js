describe('My First Test Suite', function()
{
   it('My First Test Case', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
    /* Handling Static dropdowns */
    //requirement: select option3, assert if value is option3
    cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
    
    
    /* Handling Dynamic dropdowns */

    cy.get('#autocomplete').type('Mon')
    //traverse parent to child (cy.get())
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      // $el is a wrapped jQuery element

      if($el.text() === "Montserrat")
      {
         cy.wrap($el).click()
      }
  })






   })

})