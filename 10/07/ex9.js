let nome = document.querySelector("#nome");
let comentario = document.querySelector("#comentario");
let botao = document.querySelector("#botao");
let comentarios = document.querySelector("#comentarios");
botao.addEventListener("click", function () {
    let titulo = document.createElement("h3");
    titulo.textContent = nome.value;
    let texto = document.createElement("p");
    texto.textContent = comentario.value;
    comentarios.appendChild(titulo);
    comentarios.appendChild(texto);
    nome.value = "";
    comentario.value = "";
});