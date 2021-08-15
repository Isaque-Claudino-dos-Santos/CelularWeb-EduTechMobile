let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

function game() {
    let ponto = 0;


    let fruta_img = new Image()
    fruta_img.src = document.getElementById("fruit").src;



    let fruta_x = Math.floor(Math.random() * tela.width);
    let fruta_y = Math.floor(Math.random() * tela.height);
    let fruta_tw = fruta_th = 40;


    let sapo_img = new Image()
    sapo_img.src = document.getElementById("pec-direita").src;

    let sapo_x = sapo_y = 0;
    let sapo_tw = sapo_th = 50;
    let vel = 5;


    let LEFT = 65, TOP = 87, RIGHT = 68, DOWN = 83;
    let mvr = mvt = mvl = mvd = false;

    addEventListener("keydown", moveOn);
    addEventListener("keyup", moveOff);

    function moverse() {
        if (mvr) {
            sapo_x += vel;
            sapo_img.src = document.getElementById("pec-direita").src;
        } else if (mvt) {
            sapo_y -= vel;
            sapo_img.src = document.getElementById("pec-cima").src;
        } else if (mvl) {
            sapo_x -= vel;
            sapo_img.src = document.getElementById("pec-esqueda").src;
        } else if (mvd) {
            sapo_y += vel;
            sapo_img.src = document.getElementById("pec-baixo").src;
        };
    }

    function moveOn(ev) {
        const key = ev.keyCode;

        switch (key) {
            case LEFT:
                mvl = true;
                break;
            case TOP:
                mvt = true;
                break;
            case RIGHT:
                mvr = true;
                break;
            case DOWN:
                mvd = true;
                break;
        }
    }

    function moveOff(ev) {
        const key = ev.keyCode;

        switch (key) {
            case LEFT:
                mvl = false;
                break;
            case TOP:
                mvt = false;
                break;
            case RIGHT:
                mvr = false;
                break;
            case DOWN:
                mvd = false;
                break;
        }
    }

    // colisão com borda da tela

    function colisaoBorda() {
        if (sapo_x + sapo_tw > tela.width) { // to left
            sapo_x -= vel;
        } else if (sapo_x < 0) { // to right
            sapo_x += vel;
        } else if (sapo_y < 0) { // to top
            sapo_y += vel;
        } else if (sapo_y + sapo_th > tela.height) {// to dowm
            sapo_y -= vel;
        }
    }


    function coletarFruta() {
        if (fruta_x + fruta_tw > tela.width) { // to left
            fruta_x = Math.floor(Math.random() * tela.width);
            fruta_y = Math.floor(Math.random() * tela.height);
        } else if (fruta_x < 0) { // to right
            fruta_x = Math.floor(Math.random() * tela.width);
            fruta_y = Math.floor(Math.random() * tela.height);
        } else if (sapo_y < 0) { // to top
            fruta_x = Math.floor(Math.random() * tela.width);
            fruta_y = Math.floor(Math.random() * tela.height);
        } else if (fruta_y + fruta_th > tela.height) {
            fruta_x = Math.floor(Math.random() * tela.width);
            fruta_y = Math.floor(Math.random() * tela.height);
        }
        if (sapo_x + sapo_tw > fruta_x &&
            sapo_x < fruta_x + fruta_tw &&
            sapo_y + sapo_th > fruta_y &&
            sapo_y < fruta_y + fruta_th) {
            fruta_y = Math.floor(Math.random() * tela.height);
            ponto += 1;
        }
    }

    // sprits

    function imgDesenho(src, x, y, w, h) {
        pincel.drawImage(src, x, y, w, h);
    }

    function update() {
        moverse();
        colisaoBorda();
        coletarFruta();
    }

    function items() {
        pincel.clearRect(0, 0, tela.width, tela.height);
        imgDesenho(fruta_img, fruta_x, fruta_y, fruta_tw, fruta_th);
        imgDesenho(sapo_img, sapo_x, sapo_y, sapo_tw, sapo_th);
        document.querySelector(".score").innerHTML = `Pontos: ${ponto}`;
    }

    function loop() {
        requestAnimationFrame(loop, tela);
        items();
        update();
    }

    loop();


}

game();

