let estado = true;

function playPause() {
    let playList = document.querySelector("#playlist");
    let pausePlay = document.querySelector("#pausePlay");
    let estadoImg = document.querySelector("#pausePlay");

    if (estado) {
        playList.play();
        pausePlay.href = "./btn-play.css";
        estadoImg.src = "./img/pause.svg";
        estado = false;
    } else {
        playList.pause();
        pausePlay.href = "./btn-pause.css";
        estadoImg.src = "./img/play-logo.svg";
        estado = true;
    }
}

let musicaAtual = 0;

function skip() {
    let estadoImg = document.querySelector("#pausePlay");
    let playList = document.querySelector("#playlist");
    let musicas = document.querySelectorAll("source");

    if (musicaAtual !== musicas.length) {
        playList.src = musicas[musicaAtual].src;
        musicaAtual++;
    } else {
        playList.src = musicas[0].src;
        musicaAtual = 0;
    }
    playList.play();
    estadoImg.src = "./img/pause.svg";

    console.log(musicaAtual)
}


function back() {
    let estadoImg = document.querySelector("#pausePlay");
    let playList = document.querySelector("#playlist");
    let musicas = document.querySelectorAll("source");

    if (musicaAtual !== musicas.length) {
        if (musicaAtual === -1) {
            musicaAtual = musicas.length - 1;
        }
        playList.src = musicas[musicaAtual].src;
        musicaAtual--;
    } else {
        playList.src = musicas[1].src;
        musicaAtual = 0;
    }
    playList.play();
    estadoImg.src = "./img/pause.svg";
}

