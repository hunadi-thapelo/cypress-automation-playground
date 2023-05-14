describe('My Sixth Test Suite', function()
{
   it('Handling Web Tables with assertion', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.scrollTo(0, 500)

    //Requirement is to get Price of the REST API course
    //Array solution
    //Child-to-Child locator


    //$el element is every array iteration
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      const courseName = $el.text() //to grab text of element at that (index) iteration
      if(courseName.includes('REST'))
      {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) //.next() method to move to sibling
        {
          const priceStr = price.text()
          expect(priceStr).to.equal('35')
        })
      }
  })

    })
    


   })
