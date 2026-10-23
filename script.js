const FONTE_MIN = 70;
const FONTE_MAX = 150;
const PASSO = 10;
const LARGURA_BASE = 800;

let tamanhoFonte = 100;
const main = document.querySelector("main");

function aplicarTamanho() {
  document.body.style.fontSize = tamanhoFonte + "%";

  const largura = LARGURA_BASE + ((tamanhoFonte - 100) / PASSO) * 50;
  main.style.maxWidth = Math.max(largura, LARGURA_BASE) + "px";
}

function aumentarFonte() {
  if (tamanhoFonte < FONTE_MAX) {
    tamanhoFonte += PASSO;
    aplicarTamanho();
  }
}

function diminuirFonte() {
  if (tamanhoFonte > FONTE_MIN) {
    tamanhoFonte -= PASSO;
    aplicarTamanho();
  }
}
function alternarContraste() {
  document.body.classList.toggle("alto-contraste");
}
