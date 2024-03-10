const relogio = document.getElementById('relogio');
let intervalo = null;
let segundosPassados = 0;
let minutos = 0;
let segundos = 0;

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
  if (intervalo) paraIntervalo();
  intervalo = setInterval(atualizaSegundosPassados, 1000);
}

function paraIntervalo() {
  clearInterval(intervalo);
}

function zeraIntervalo() {
  paraIntervalo();
  segundosPassados = 0;
  atualizaTela();
}