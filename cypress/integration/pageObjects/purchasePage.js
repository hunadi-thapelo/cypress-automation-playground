class purchasePage{

    getLocationInput(){
     return cy.get('#country')
    }

    getSuggestionDropdown(){
    return cy.get('.suggestions > ul > li > a')
    }

    getCheckbox(){
    return cy.get('#checkbox2')
    }

    getPurchaseBtn(){
    return cy.get('.ng-untouched > .btn')
    }

    }
    

    export default purchasePage;