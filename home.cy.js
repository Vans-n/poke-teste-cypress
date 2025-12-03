describe('Página Inicial - Poke+', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Carrega navbar e botões principais', () => {
    cy.get('.logo').should('contain', 'Poke+');
    cy.get('.btn-login').should('be.visible').and('have.attr', 'href', 'login.html');
    cy.get('.btn-cadastro').should('be.visible').and('have.attr', 'href', 'cadastro.html');
  });

  it('Exibe o título e os textos da seção hero', () => {
    cy.get('.hero-text h1')
      .should('be.visible')
      .and('contain', 'Feito para quem ama aprender');
    cy.contains('Comece sua jornada')
      .should('be.visible')
      .and('have.attr', 'href', 'cadastro.html');
  });

  it('Exibe a imagem principal da hero', () => {
    cy.get('.hero-animation img')
      .should('have.attr', 'src', 'poke.jpg')
      .and('be.visible');
  });

  it('Verifica a seção de informações', () => {
    cy.get('.info h2').should('contain', 'Descubra o mundo dos Pokémons');
  });

  it('Verifica o rodapé', () => {
    cy.get('footer p').should('contain', '© 2025 Poke+');
  });

});