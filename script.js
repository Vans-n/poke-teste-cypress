// === LOGIN ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;
      const mensagemErro = document.getElementById("mensagemErro");

      const dadosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioEncontrado = dadosSalvos.find(
        (u) => u.email === email && u.senha === senha
      );

      if (!email || !senha) {
        mensagemErro.textContent = "Preencha todos os campos.";
        return;
      }

      if (usuarioEncontrado) {
        mensagemErro.style.color = "green";
        mensagemErro.textContent = "Login realizado com sucesso!";
        setTimeout(() => {
          window.location.href = "pokedex.html";
        }, 1000);
      } else {
        mensagemErro.style.color = "red";
        mensagemErro.textContent = "E-mail ou senha incorretos.";
      }
    });
  }
});


// === CADASTRO — ATUALIZADO PARA PASSAR NOS TESTES ===
document.addEventListener("DOMContentLoaded", () => {
  const btnCadastrar = document.getElementById("btnCadastrar");

  if (btnCadastrar) {
    btnCadastrar.addEventListener("click", () => {

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senhaCadastro").value;
      const confirmar = document.getElementById("confirmarSenha").value;
      const mensagem = document.getElementById("mensagem");

      mensagem.style.display = "block";
      mensagem.className = "";

      // 1 — Campos vazios
      if (!nome || !email || !senha || !confirmar) {
        mensagem.classList.add("erro");
        mensagem.textContent = "Erro: Preencha todos os campos.";
        return;
      }

      // 2 — Nome inválido (Cypress procura 'nome')
      if (nome.length < 3) {
        mensagem.classList.add("erro");
        mensagem.textContent = "Erro: O nome informado é muito curto.";
        return;
      }

      // 3 — Email inválido (Cypress procura 'e-mail')
      if (!email.includes("@") || !email.includes(".")) {
        mensagem.classList.add("erro");
        mensagem.textContent = "Erro: Formato de e-mail inválido.";
        return;
      }

      // 4 — Senha fraca (Cypress procura 'senha forte')
      if (senha.length < 6) {
        mensagem.classList.add("erro");
        mensagem.textContent = "Erro: Crie uma senha forte (mínimo 6 caracteres).";
        return;
      }

      // 5 — Senhas diferentes (Cypress procura 'coincidem')
      if (senha !== confirmar) {
        mensagem.classList.add("erro");
        mensagem.textContent = "Erro: As senhas não coincidem.";
        return;
      }

      // 6 — Sucesso (Cypress procura 'sucesso')
      mensagem.classList.add("sucesso");
      mensagem.textContent = "Cadastro realizado com sucesso!";

      // salva no localStorage
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      usuarios.push({ nome, email, senha });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    });
  }
});


// === RESTO DA POKÉDEX (NÃO ALTERADO) ===
document.addEventListener("DOMContentLoaded", () => {
  // sua Pokédex permanece aqui igual
});
