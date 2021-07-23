let telaBloqueio = document.querySelector(".pg1");
let telaInicio = document.querySelector(".pg2");
let appMusica = document.querySelector("#appmusica");
let cssDisplay = document.querySelector("#estadosTela");

function inicio() {
    cssDisplay.href = "./css/camadas-pg/pg-inicio.css";
}

telaBloqueio.onclick = inicio;

function musica() {
    cssDisplay.href = "./css/camadas-pg/pg-musica.css";
}

appMusica.onclick = musica;