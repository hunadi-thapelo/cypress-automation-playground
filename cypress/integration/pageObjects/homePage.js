class homePage{

getNameInputField(){
   return cy.get('input[name="name"]:nth-child(2)')
}

getGender(){
    return  cy.get('select')
 }

 getTwoWayBindingInput(){
    return cy.get(':nth-child(4) > .ng-untouched')
 }

 getEntreprenuer(){
   return cy.get('#inlineRadio3')
}

getShopTab(){
    return cy.get(':nth-child(2) > .nav-link')
}

}


export default homePage;