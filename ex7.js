let botao = document.querySelector("#botao");
let cards = document.querySelector("#cards");
botao.addEventListener("click", function () {
    let card = document.createElement("div");
    let titulo = document.createElement("h2");
    titulo.textContent = "Vingadores";
    let genero = document.createElement("p");
    genero.textContent = "Gênero: Ação";
    let ano = document.createElement("p");
    ano.textContent = "Ano: 2019";
    card.appendChild(titulo);
    card.appendChild(genero);
    card.appendChild(ano);
    cards.appendChild(card);
});