///<reference types= "cypress" />
import homePage from '../pageObjects/homePage.js';
import productPage from '../pageObjects/productPage.js';
import cartPage from '../pageObjects/cartPage.js';
import purchasePage from '../pageObjects/purchasePage.js';

describe('Cypress Framework', function()
{
    before(() => {
        // root-level hook
        // runs once before all tests in the block
        cy.fixture('example').then(function(tstData){
            this.data=tstData
        })

      })


   it('My TC with before hook', function()
   {
    const myHomePage = new homePage()
    const myProductPage = new productPage()
    const myCartPage = new cartPage()
    const myPurchasePage = new purchasePage()

    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    myHomePage.getNameInputField().type(this.data.name)

    myHomePage.getGender().select(this.data.gender)

    //requirement: validate if value entered is same as name value entered
    myHomePage.getTwoWayBindingInput().should('have.value', this.data.name)

    //requirement: validate if propery min length is correct - simply assertion to check
    myHomePage.getNameInputField().should('have.attr','minlength', '2')

    //requirement: validate if propery is in disabled behvaiour
    myHomePage.getEntreprenuer().should('be.visible')

    Cypress.config('defaultCommandTimeout', 9000)
    //Navigates to Shop ecommerce tab
    myHomePage.getShopTab().click()

    //cy.selectProduct('Samsung Note 8') //selects one product to cart
    
    //Requirement select and add 2 products to cart
    this.data.productName.forEach((element) => cy.selectProduct(element))

    myProductPage.getCheckOutCart().click()

    myCartPage.getCheckOutSuccess().click()


    //new page
    myPurchasePage.getLocationInput().type(this.data.countryName)
    myPurchasePage.getSuggestionDropdown().click()
    myPurchasePage.getCheckbox().click({force: true})
    myPurchasePage.getPurchaseBtn().click()
    //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){
        const actualText =element.text()
        expect(actualText.includes("Success")).to.be.true
    })
 

})

})
