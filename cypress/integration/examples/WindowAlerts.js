describe('My First Test Suite', function()
{
   it('My First Test Case', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //Handling auto alerts and pop ups
    
    cy.get('#name').type('Mellow')
    cy.get('#name').should('have.value','Mellow')
    cy.get('#alertbtn').click()

    // fire event with method on
    cy.on('window:alert',(str)=>{
      //assertions using Mocha (e.g should)
      expect(str).to.equal('Hello Mellow, share this practice page and share your knowledge');
    })

    //Handling auto window alert confirm 
    cy.get('[value="Confirm"]').click()

    // fire event with method on
    cy.on('window:confirm',(str)=>{
      //assertions using Mocha (e.g should)
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    })


   })

})