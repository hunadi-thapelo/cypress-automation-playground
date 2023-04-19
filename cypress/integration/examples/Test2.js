describe('My First Test Suite', function()
{
   it('My First Test Case', function()
   {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    
    //Parent child chaining
    //use aliases to reuse DOM elements as.()
    cy.get('.products').as('productsLocator')

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    //dynamically finding a product, clicking to add to cart
    cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
        // $el is a wrapped jQuery element

        const vegText = $el.find('h4.product-name').text()
        if(vegText.includes('Cashews'))
        {
            cy.wrap($el).find('button').click()
        }
    })

    //click cart image
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
   })

})