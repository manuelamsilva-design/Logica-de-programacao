let recado = document.querySelector("#recado");
let botao = document.querySelector("#botao");
let mural = document.querySelector("#mural");
botao.addEventListener("click", function () {
    let mensagem = document.createElement("p");
    mensagem.textContent = recado.value;
    mural.appendChild(mensagem);
    recado.value = "";
});