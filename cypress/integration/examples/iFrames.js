/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My Cypress iFrames Test Suite', function()
{
   it('should switch to iFrame embedded ', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe') //gives Cypress knowledge of iframe to focus on / switch to
    cy.iframe().find('a[href*="mentorship"]').eq(0).click() //locator css regular ex

    cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2) //assertion //throws an error
   
   /* -- WIP to resolve assertion error
   //cy.iframe().find('button[class*="btn-lg"]').as('price-btn')
    //cy.iframe().find('@price-btn').should('have.length',2)
    
   // find('h1[class*="pricing-title"]').should('have.length',2) //assertion

    //cy.iframe().find('h3[class*="pricing-price"]').should('have.length', 2)


     //cy.iframe().find('h3[class*="pricing-price"]').as('price')
    
     //cy.find('@price').should('have.length', 2)
     */



    })
})