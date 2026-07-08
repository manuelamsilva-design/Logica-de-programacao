let botao = document.querySelector("#botao");
botao.addEventListener("click", function () {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "Olá mundo!";
    document.body.appendChild(paragrafo);
});