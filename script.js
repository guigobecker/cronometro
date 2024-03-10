const relogio = document.getElementById('relogio');
let intervalo = null;
let segundosPassados = 0;
let minutos = 0;
let segundos = 0;

function atualizaTela() {
  minutos = Math.floor(segundosPassados / 60);
  segundos = segundosPassados % 60;
  relogio.innerHTML = `${minutos}:${segundos}`;
}

function atualizaSegundosPassados(){
  segundosPassados++;
  atualizaTela();
}

function iniciaIntervalo() {
  intervalo = setInterval(atualizaSegundosPassados, 1000);
}