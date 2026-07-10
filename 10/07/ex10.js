let nome = document.querySelector("#nome");
let postagem = document.querySelector("#postagem");
let botao = document.querySelector("#botao");
let feed = document.querySelector("#feed");
botao.addEventListener("click", function () {
    let post = document.createElement("div");
    let autor = document.createElement("h3");
    autor.textContent = nome.value;
    let texto = document.createElement("p");
    texto.textContent = postagem.value;
    let curtidas = document.createElement("p");
    curtidas.textContent = "Curtidas: 0";
    let botaoCurtir = document.createElement("button");
    botaoCurtir.textContent = "Curtir";
    let contador = 0;
    botaoCurtir.addEventListener("click", function () {
        contador++;
        curtidas.textContent = `Curtidas: ${contador}`;
    });
    post.appendChild(autor);
    post.appendChild(texto);
    post.appendChild(curtidas);
    post.appendChild(botaoCurtir);
    feed.appendChild(post);
    nome.value = "";
    postagem.value = "";
});