/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My Cypress iFrames Test Suite', function()
{
   it('should switch to iFrame embedded ', function()
   {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe') //gives Cypress knowledge of iframe to focus on / switch to

    })
})