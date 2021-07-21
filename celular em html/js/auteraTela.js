let telaBloqueio = document.querySelector(".pg1");
let telaInicio = document.querySelector(".pg2");
let telaMusica = document.querySelector(".pgMusica");
let appMusica = document.querySelector(".appmusica");


function inicio() {
    telaInicio.style.visibility = "visible";
    telaBloqueio.style.visibility = "hidden";
    telaMusica.style.visibility = "hidden";
}

telaBloqueio.onclick = inicio;

function musica() {
    telaMusica.style.visibility = "visible";
    telaBloqueio.style.visibility = "hidden";
    telaInicio.style.visibility = "hidden";
}


appMusica.mouseup = musica;