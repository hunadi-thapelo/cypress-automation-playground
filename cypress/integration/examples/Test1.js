describe('My First Test Suite', function()
{
   it('My First Test Case', function()
   {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
    //Parent child chaining
    //use aliases to reuse DOM elements as.()
    cy.get('.products').as('productsLocator')
    cy.get('@productsLocator').find('.product').should('have.length',4).then(function(){
        console.log('print')
    })
    //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    //dynamically finding a product, clicking to add to cart
    cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
        // $el is a wrapped jQuery element

        const vegText = $el.find('h4.product-name').text()
        if(vegText.includes('Cashews'))
        {
            cy.wrap($el).find('button').click()
        }
    })

    cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
    })










   })


})