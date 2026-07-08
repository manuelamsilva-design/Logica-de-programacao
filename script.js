let botao = document.querySelector("#botao");
let lista = document.querySelector("#lista");
botao.addEventListener("click", function () {
    let item = document.createElement("li");
    item.textContent = "Novo item";
    lista.appendChild(item);
});