describe('Testar login como usuári', function() {
    beforeEach(function(){
        cy.visit('https://portal-antecipacao-teste.profrotas.com.br/#!/login?r=true')

})
    it('Testa o login no portal' function() {
      cy.get('#username').type('teste')

})

})

  

    
