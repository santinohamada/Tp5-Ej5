/*5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
 */
let bandera = false;
const $pausar = document.querySelector(".btn-danger");
const $iniciar = document.querySelector(".btn-success");
const $resetear = document.querySelector(".btn-info");

$resetear.addEventListener("click", () => {
  milisegundos = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  ajusteTiempo(horas, minutos, segundos, milisegundos);
});
$pausar.addEventListener("click", () => {
  bandera = false;
});
$iniciar.addEventListener("click", () => {
  bandera = true;
  cronometro();
});
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
function ajusteTiempo(horas, minutos, segundos, milisegundos) {
  let cronometroIndex = document.querySelector("h2");
  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  if (milisegundos < 10) {
    milisegundos = "0" + milisegundos;
  }
  cronometroIndex.innerHTML = `${horas}:${minutos}:${segundos},${milisegundos}`;
}
function cronometro() {
  let cronometroInterval = setInterval(() => {
    if (bandera == false) {
      clearInterval(cronometroInterval);
    }
    milisegundos++;
    if (milisegundos == 100) {
      segundos++;
      milisegundos = 0;
    }
    if (segundos == 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos == 60) {
      horas++;
    }
    ajusteTiempo(horas, minutos, segundos, milisegundos);
  }, 10);
}
