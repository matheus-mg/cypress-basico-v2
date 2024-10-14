Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Matheus')
    cy.get('#lastName').type('Rodrigues')
    cy.get('#email').type('mgo.rodrigues@gmail.com')
    cy.get('#open-text-area').type('teste') 
    cy.get('button[type="submit"]').click()
})