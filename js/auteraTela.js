let cssHref = document.getElementById("linkCSS");
let dir = "./css/trocaCSS/";

let tela_bloqueio = document.getElementById("telaBloqueio");
let appmusica= document.getElementById("appmusica");
let appGame = document.getElementById("appGame");

function clickPg1() {
   cssHref.href = dir+"ir_pg2.css";
}
tela_bloqueio.onclick = clickPg1;

function clickAppMusica() {
   cssHref.href = dir+"ir_AppMusica.css";
}
appmusica.onclick = clickAppMusica;

function clickAppJogo() {
   cssHref.href = dir+"ir_AppJogo.css";
}
appGame.onclick = clickAppJogo;

function clickSair() {
   cssHref.href = dir+"ir_pg2.css";
}
