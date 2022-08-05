var relogio = document.querySelector('#relogio')
var data = new Date();
var dia = data.getDay()
var mm = data.getMonth()
var mes = mm + 1;
var ano = data.getFullYear()

dia = dia < 10 ? `0${dia}` : dia;
mes = mes < 10 ? `0${mes}` : mes;

relogio.innerHTML = `${dia}/${mes}/${ano}`
