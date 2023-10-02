const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    
    deselectButton();
    deselectCharacter();

    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
  });
});

function  deselectCharacter() {
    const personagemSelecionado = document.querySelector(
        ".personagem.selecionado"
    );
    personagemSelecionado.classList.remove("selecionado");
}

function deselectButton() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
