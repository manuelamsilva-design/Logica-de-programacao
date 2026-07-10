let input = document.querySelector("#texto");
let botao = document.querySelector("#botao");
let lista = document.querySelector("#lista");
botao.addEventListener("click", function () {
    let item = document.createElement("li");
    item.textContent = input.value;
    lista.appendChild(item);
});