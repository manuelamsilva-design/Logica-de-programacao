let botao = document.querySelector("#botao");
let conteudo = document.querySelector("#conteudo");
botao.addEventListener("click", function () {
    let titulo = document.createElement("h1");
    titulo.textContent = "Título";
    let descricao = document.createElement("p");
    descricao.textContent = "Descrição";
    conteudo.appendChild(titulo);
    conteudo.appendChild(descricao);
});