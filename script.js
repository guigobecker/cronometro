const relogio = document.getElementById('relogio');
let intervalo = null;
let segundosPassados = 0;
let minutos = 0;
let segundos = 0;
let parado = true;

function formataTempo(tempo) {
  return String(tempo).padStart(2, '0');
}

function atualizaTela() {
  minutos = Math.floor(segundosPassados / 60);
  segundos = segundosPassados % 60;
  relogio.innerHTML = `${formataTempo(minutos)}:${formataTempo(segundos)}`;
}

function atualizaSegundosPassados(){
  segundosPassados++;
  atualizaTela();
}

function iniciaIntervalo() {
  if (parado) {
    intervalo = setInterval(atualizaSegundosPassados, 1000);
    parado = false;
  }
}

function paraIntervalo() {
  clearInterval(intervalo);
  parado = true;
}

function zeraIntervalo() {
  paraIntervalo();
  segundosPassados = 0;
  atualizaTela();
}