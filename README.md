# 🔴 Poke+
# Meu projeto com testes automatizados

Este repositório faz parte do desenvolvimento do **Poke+**, um projeto criado para praticar HTML, CSS, JavaScript e, principalmente, **testes automatizados com Cypress**.

A ideia é montar uma aplicação simples, mas funcional, com Home e Cadastro. E garantir que tudo funciona direitinho através de testes E2E.

Também aproveitei referências importantes durante o processo, como **W3Schools** e o tutorial do vídeo 👉 https://www.youtube.com/watch?v=fV7bhcpgWo0 que me ajudaram a entender melhor alguns conceitos.

---

## 🤞 Como rodar o projeto e os testes

Antes de começar, é preciso ter o **Node.js** instalado.

### 1. Instalar dependências gerais:
```bash
npm init -y  → cria o package.json automaticamente  
npm install cypress --save-dev  → instala o Cypress  
npx cypress open  → abre o Cypress
```

✔️ O que os testes verificam?

Os testes foram criados para garantir que tudo o que o usuário vê e faz no sistema funcione como deveria.

🏠 1. Página Inicial (Home)

Navbar aparece corretamente

Botões de Login e Cadastro são exibidos e apontam para as páginas certas

O título principal e o texto da seção hero são exibidos

A imagem principal da hero carrega sem problemas

O rodapé tem o texto correto

📝 2. Tela de Cadastro

Aqui acontece a maior parte das validações:

Inputs são renderizados

Campos obrigatórios não podem ficar vazios

Nome muito curto mostra erro

E-mail inválido também

Senha fraca (menos de 6 caracteres) gera aviso

Senhas diferentes exibem erro

Quando tudo está certo → mensagem de sucesso aparece


📁 Estrutura do Projeto
Poke+/
│── home.html
│── cadastro.html
│── style.css
│── script.js
│
└── cypress/
    ├── e2e/
    │   ├── home.cy.js
    │   ├── cadastro.cy.js
    └── ...

🛠 Requisitos

Node.js

Cypress 12+

Navegador (Chrome)

💬 Sobre o projeto

Este projeto foi criado para treinar conceitos de front-end e testes automatizados.
A ideia é entender bem o funcionamento do Cypress e melhorar a segurança das funcionalidades.

Durante o desenvolvimento, contei com ajuda de:

ChatGPT (assistente para dúvidas e ajustes)

W3Schools (consultas rápidas de HTML/CSS/JS)

Vídeo de referência: https://www.youtube.com/watch?v=fV7bhcpgWo0

👩🏽 Autora

Desenvolvido por Vanessa Santos
Com apoio do ChatGPT, W3Schools e vídeo tutorial do canal citado acima.
