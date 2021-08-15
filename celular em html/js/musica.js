// pause e play

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
        console.log(`Play`);
    } else {
        playList.pause();
        pausePlay.href = "./btn-pause.css";
        estadoImg.src = "./img/play-logo.svg";
        estado = true;
        console.log(`Pause`);
    }
}

// voltar e avançar

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

    console.log(`Avançar:${playList.src}`);
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

    console.log(`Voltar:${playList.src}`);
}


// Volume

function vol(v) {
    let playList = document.querySelector("#playlist");
    vols = parseFloat(v.value / 100);
    playList.volume = vols;

    console.log(`Volume:${vols}`);
}

//currentTime
let playList = document.querySelector("#playlist");
let tpm = document.getElementById("tempM");

function tempMusic() {
    playList = document.querySelector("#playlist");
    tpm = document.getElementById("tempM");
    vt = document.getElementById("vierT").innerHTML =  tpm.value;
    tpm.max = playList.duration;
    tpm.value = playList.currentTime;
    playList.currentTime = tpm.value;

    console.log(`Tempo-Musica:${tpm.value}`);
}

function reatT() {
    playList.currentTime = tpm.value;
}

tpm.onclick = reatT;

setInterval(tempMusic, 1000);





