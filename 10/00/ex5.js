let tarefa = document.querySelector("#tarefa");
let botao = document.querySelector("#botao");
let lista = document.querySelector("#lista");
botao.addEventListener("click", function () {
    let item = document.createElement("li");
    item.textContent = tarefa.value;
    lista.appendChild(item);
    tarefa.value = "";
});