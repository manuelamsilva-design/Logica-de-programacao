let botao = document.querySelector("#botao");
let lista = document.querySelector("#lista");
let contador = 1;
botao.addEventListener("click", function () {
    let item = document.createElement("li");
    item.textContent = `Item ${contador}`;
    lista.appendChild(item);
    contador++;
});