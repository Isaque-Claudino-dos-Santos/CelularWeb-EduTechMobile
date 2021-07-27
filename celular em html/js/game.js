let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

function game() {
    let ponto = 0;
    
    let fruta_x = fruta_y = Math.floor(Math.random() * tela.width);
    let sapo_x = sapo_y = Math.floor(Math.random() * tela.width);
    let vel = 1;

    let LEFT = 65, TOP = 87, RIGHT = 68, DOWN = 83;

    addEventListener("keydown", mover);

    function mover(ev) {
        let key = ev.keyCode;

        if (sapo_x + 2 > tela.width || sapo_x - 1 < 0 || sapo_y + 2 > tela.height || sapo_y - 1 < 0) {
            ponto = 0;
        }


        switch (key) {
            case LEFT:

                sapo_x -= vel;
                break;
            case TOP:

                sapo_y -= vel;
                break;
            case RIGHT:
                sapo_x += vel;
                break;
            case DOWN:

                sapo_y += vel;
                break;
        }

        console.log(`C: x${sapo_x}`)
        console.log(`C: y${sapo_y}`)
        console.log(`F: x${fruta_x}`)
        console.log(`F: y${fruta_y}`)
    }

    // desenha fruta


    function colocaFruta() {
        let coloca_x = Math.floor(Math.random() * tela.width);
        let coloca_y = Math.floor(Math.random() * tela.height);

        fruta_x = coloca_x;
        fruta_y = coloca_y;
    }

    // REGRAS

    function regras() {
        if (sapo_x === fruta_x && sapo_y === fruta_y) {
            colocaFruta();
            ponto += 1;
        }
    }


    // sprits

    function desenhaRect(x,y,c) {
        pincel.fillStyle = c;
        pincel.fillRect(x,y,1,1);
        pincel.fill();
    }

    function atualizacao() {
        pincel.clearRect(0, 0, tela.width, tela.height);
        desenhaRect(fruta_x, fruta_y,"purple");
        desenhaRect(sapo_x, sapo_y,"green");
        document.querySelector(".score").innerHTML = `Pontos: ${ponto}`;
        regras();
    }

    function loop() {
        requestAnimationFrame(loop, tela);
        atualizacao();
    }

    loop();


}

game();

