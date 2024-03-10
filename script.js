const relogio = document.getElementById('relogio');
let intervalo = null;
let segundosPassados = 0;

function atualizaTela() {
  relogio.innerHTML = segundosPassados;
}

function atualizaSegundosPassados(){
  segundosPassados++;
  atualizaTela();
}

function iniciaIntervalo() {
  intervalo = setInterval(atualizaSegundosPassados, 1000);
}