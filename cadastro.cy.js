describe('Tela de Cadastro - Poke+', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/cadastro.html')
  })

  // Serve para verificar se todos os inputs de fato existem
  it('Deve renderizar todos os campos do formulário', () => {
    cy.get('#nome').should('exist').and('have.attr', 'type', 'text')
    cy.get('#email').should('exist').and('have.attr', 'type', 'email')
    cy.get('#senhaCadastro').should('exist').and('have.attr', 'type', 'password')
    cy.get('#confirmarSenha').should('exist').and('have.attr', 'type', 'password')
    cy.get('#btnCadastrar').should('exist').and('be.visible')
    cy.get('#mensagem').should('exist')
  })

  // Testando envio com campos vazios
  it('Não deve cadastrar com campos vazios', () => {
    cy.get('#btnCadastrar').click()

    cy.get('#mensagem')
      .should('be.visible')
      .and('contain', 'Preencha todos os campos') // Se não tiver a frase "Preencha todos os campos" na mensagem, o teste da erro
  })

  // Nome muito curto
  it('Deve exibir erro quando o nome for inválido', () => {
    cy.get('#nome').type('A')
    cy.get('#email').type('teste@teste.com')
    cy.get('#senhaCadastro').type('Senha123')
    cy.get('#confirmarSenha').type('Senha123')

    cy.get('#btnCadastrar').click()

    cy.get('#mensagem')
      .should('be.visible')
      .and('contain', 'nome') // Se não tiver a palavra nome na mensagem, o teste da erro
  })

  // Verifica se o e-mail é invalido
  it('Deve exibir erro quando o e-mail for inválido', () => {
    cy.get('#nome').type('Vanessa Santos')
    cy.get('#email').type('email-invalido')
    cy.get('#senhaCadastro').type('Senha123')
    cy.get('#confirmarSenha').type('Senha123')

    cy.get('#btnCadastrar').click()

    cy.get('#mensagem')
      .should('be.visible')
      .and('contain', 'e-mail') // Se não tiver a palavra e-mail na mensagem, o teste da erro
  })

  // Vai verificar se a senha esta fraca
  it('Deve exibir erro quando a senha for fraca', () => {
    cy.get('#nome').type('Vanessa Santos')
    cy.get('#email').type('vanessa@poke.com')
    cy.get('#senhaCadastro').type('123')
    cy.get('#confirmarSenha').type('123')

    cy.get('#btnCadastrar').click()

    cy.get('#mensagem')
      .should('be.visible')
      .and('contain', 'senha forte') // Se não tiver a palavra senha forte na mensagem, o teste da erro
  })

  // Senhas diferentes
  it('Deve exibir erro quando as senhas forem diferentes', () => {
    cy.get('#nome').type('Vanessa Santos')
    cy.get('#email').type('vanessa@poke.com')
    cy.get('#senhaCadastro').type('Senha123')
    cy.get('#confirmarSenha').type('OutraSenha')

    cy.get('#btnCadastrar').click()

    cy.get('#mensagem')
      .should('be.visible')
      .and('contain', 'coincidem') // Se não tiver a palavra cocidem na mensagem, o teste da erro
  })

  // Cadastro ok
  it('Deve cadastrar corretamente com todos os campos válidos', () => {
    cy.get('#nome').type('Vanessa Santos')
    cy.get('#email').type('vanessa@poke.com')
    cy.get('#senhaCadastro').type('Senha123!')
    cy.get('#confirmarSenha').type('Senha123!')

    cy.get('#btnCadastrar').click()

    cy.get('#mensagem')
      .should('be.visible')
      .and('contain', 'sucesso') // Se não tiver a palavra sucesso na mensagem, o teste da erro
  })
})
