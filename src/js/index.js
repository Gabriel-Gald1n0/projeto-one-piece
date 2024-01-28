const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao,indice) => {
    botao.addEventListener("click", () =>{
        desSelecionarBotao();
        botao.classList.add("selecionado");
        
        selecionarPersonagem();
        personagens[indice].classList.add("selecionado");
    });  
});

function selecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desSelecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

