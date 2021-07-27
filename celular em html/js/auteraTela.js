let telaBloqueio = document.querySelector(".pg1");
let telaInicio = document.querySelector(".pg2");
let appJogo = document.querySelector("#appGame");
let appMusica = document.querySelector("#appmusica");
let btnVoltarInicio1 = document.querySelector("#sair1");
let btnVoltarInicio2 = document.querySelector("#sair2");
let btnVoltarInicio3 = document.querySelector("#sair3");
let cssDisplay = document.querySelector("#estadosTela");

function inicio() {
    cssDisplay.href = "./"
    cssDisplay.href = "./css/camadas-pg/pg-inicio.css";
}

telaBloqueio.onclick = inicio;

function musica() {
    cssDisplay.href = "./"
    cssDisplay.href = "./css/camadas-pg/pg-musica.css";
}

appMusica.onclick = musica;

function jogo() {
    cssDisplay.href = "./"
    cssDisplay.href = "./css/camadas-pg/pg-jogo.css";
}

appJogo.onclick = jogo;

function voltarInicio() {
    cssDisplay.href = "./"
    cssDisplay.href = "./css/camadas-pg/pg-inicio.css";
}

btnVoltarInicio1.onclick = voltarInicio;
btnVoltarInicio2.onclick = voltarInicio;
btnVoltarInicio3.onclick = voltarInicio;
