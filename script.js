const btnHtml = document.querySelector(".html-block .btn-craft");
const btnCss = document.querySelector(".css-block .btn-craft");

// seção "Sobre Minecraft"
const sobreSection = document.querySelector("#sobre");

// controle de estado (regra do jogo)
let podeCriar = true;
let ultimoBloco = null;

// 🎮 CRIAR BLOCO
btnHtml.addEventListener("click", function(e) {
    e.preventDefault();

    if (!podeCriar) {
        alert("⚠️ Você precisa aplicar uma skin no bloco atual antes de criar outro!");
        return;
    }

    const novoSection = document.createElement("section");

    novoSection.innerHTML = `
        <div class="caixa">
            <img src="img/81gsSy5r13L.png">
            <div class="caixatexto">
                <h1 contenteditable="true">Novo bloco!</h1>
                <p contenteditable="true">
                    Clique aqui e edite esse texto ✏️
                </p>
                <button class="trocar-img">🖼️ Trocar imagem</button>
            </div>
        </div>
    `;

    // inserir logo abaixo da seção "sobre"
    sobreSection.insertAdjacentElement("afterend", novoSection);

    ultimoBloco = novoSection;
    podeCriar = false;

    // 🎯 evento do botão de trocar imagem
    const btnTrocar = novoSection.querySelector(".trocar-img");

    btnTrocar.addEventListener("click", function() {
        const novaImg = prompt("Cole o link da nova imagem:");

        if (novaImg) {
            const img = novoSection.querySelector("img");
            img.src = novaImg;
        }
    });
});

// 🎨 APLICAR SKIN
btnCss.addEventListener("click", function(e) {
    e.preventDefault();

    if (!ultimoBloco) {
        alert("⚠️ Crie um bloco primeiro!");
        return;
    }

    const caixa = ultimoBloco.querySelector(".caixa");
    const titulo = ultimoBloco.querySelector("h1");

    // cores aleatórias estilo Minecraft
    const cores = ["#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#f1c40f", "#e74c3c"];
    const cor = cores[Math.floor(Math.random() * cores.length)];

    caixa.style.backgroundColor = cor;
    caixa.style.border = "4px solid #000";

    titulo.style.color = "#ffffff";

    alert("🎨 Skin aplicada! Agora você pode criar outro bloco.");

    // libera criação de novo bloco
    podeCriar = true;
});