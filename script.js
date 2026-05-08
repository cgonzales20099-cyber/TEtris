let canvas;
let ctx;
let fps = 50;
let ampleCanvas = 400;
let altCanvas = 640;
let peça;
let retras = 50;
let contador = 0;
let ampleTaulell = 10;
let altTaulell = 20;

  

let ampleF = 40;
let altF = 40;
let taulell = [

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let peçagrafic = [
    [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ], [
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0]
        ], [

            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1]
        ], [

            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 1]
        ]
    ], [

        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ], [

        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 1]
        ], [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 1, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 1],
            [0, 0, 1, 1],
            [0, 0, 0, 1]
        ]
    ], [

        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1]
        ], [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1]
        ]
    ], [

        [
            [0, 0, 0, 0],
            [0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ], [

        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0]
        ], [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ], [

        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ], [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ]

]




function dibuixaTaulell() {
    
    for (let py = 0; py < altTaulell; py++) {
        for (let px = 0; px <= ampleTaulell; px++) {
            if (taulell[py][px] != 0) {
                
                ctx.fillStyle = '#000000';
                
                ctx.fillRect((px - 1) * ampleF, (py - 4) * altF, ampleF, altF)
            }
        }
    }
    
    
}

let objPeça = function () {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.tipo = 0;
    
    
    console.log("peça creada")
    this.fila = function () {
        let filafeta = false;
        for (py = 4; py < altTaulell; py++) {
            filafeta = true;
            for (let px = 1; px <= ampleTaulell; px++)
                if (taulell[py][px] == 0) {
                    filafeta = false;
                    
                }
                if (filafeta) {
                    for (let moverfila = py; moverfila > 0; moverfila--) {
                        for (let px = 1; px <= ampleTaulell; px++) {
                            taulell[moverfila][px] = 0
                            if (taulell[moverfila - 1][px] != 0) {
                                taulell[moverfila][px] = taulell[moverfila - 1][px]
                            }
                            
                        }
                    }
                    for (let y = altTaulell; y > 0; y--) {
                        for (let x = 1; x < ampleTaulell; x++) {
                            if (taulell[y][x] == 0) {
                            for (let yN = y; yN > 0; yN--) {
                                taulell[y][x] = taulell[y - 1][x]
                            }
                        }
                    }
                }
            }
        }
        console.log("filafeta")
    }
    
    this.gameover = function () {
        let perdut = false;
        for (px = 1; px <= ampleTaulell; px++) {
            if (taulell[0][px] != 0) {
                perdut = true;
                
            }
            
        }
        return perdut
    }
    
    this.nova = function () {
        this.tipo = Math.floor(Math.random() * 8)
        this.x = 4
        this.y = 0
    }
    this.fixapeça = function () {
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px < 4; px++) {
                if (peçagrafic[this.tipo][this.angle][py][px] != 0) {
                    taulell[this.y + py][this.x + px] = peçagrafic[this.tipo][this.angle][py][px]
                }
                
            }
        }
    }
    
    this.dibuixa = function () {
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px < 4; px++) {
                if (peçagrafic[this.tipo][this.angle][py][px] != 0) {
                    if (peçagrafic[this.tipo][this.angle][py][px] == 1) {
                        ctx.fillStyle = '#44b311';
                
                    }
                    
                    if (peçagrafic[this.tipo][this.angle][py][px] == 2) {
                        ctx.fillStyle = '#0059ff';
                    }
                    if (peçagrafic[this.tipo][this.angle][py][px] == 3) {
                        ctx.fillStyle = '#ff006a';
                    }
                    if (peçagrafic[this.tipo][this.angle][py][px] == 4) {
                        ctx.fillStyle = '#f700ff';
                    }
                    if (peçagrafic[this.tipo][this.angle][py][px] == 5) {
                        ctx.fillStyle = '#4c00ff';
                    }
                    if (peçagrafic[this.tipo][this.angle][py][px] == 6) {
                        ctx.fillStyle = '#fbff00';
                    }
                    if (peçagrafic[this.tipo][this.angle][py][px] == 7) {
                        ctx.fillStyle = '#ffcfcf';
                        
                    }
                    if (peçagrafic[this.tipo][this.angle][py][px] == 8) {
                        ctx.fillStyle = '#aa822a';
                    }
                    if (peçagrafic[this.tipo][this.angle][py][px] == 9) {
                        ctx.fillStyle = '#18a0b3';
                    }
                    ctx.fillRect((this.x + px - 1) * ampleF, (this.y + py - 4) * altF, ampleF, altF);
                }
            }
            
            
        }
    }
    
    this.caer = function () {
        
        if (contador < retras) {
            contador++;
        } else {
            if (this.colisio(this.angle, this.y + 1, this.x) == false) {
                this.y++
                contador = 0;
            } else {
                this.fixapeça();
                this.fila();
                if (this.gameover()) {
                    document.location.reload();
                }
                this.nova();
            }
            
        }
        
    }
    this.rotar = function () {
        let angleNou = this.angle
        if (angleNou < 3) {
            angleNou++
        } else {
            angleNou = 0
        }
        if (this.colisio(angleNou, this.y, this.x) == false) {
            this.angle = angleNou
        }
        
    }
    
    
    
    this.colisio = function (angleN, yN, xN) {
        let resultat = false;
        
        for (py = 0; py < 4; py++) {
            for (px = 0; px < 4; px++) {
                if (peçagrafic[this.tipo][angleN][py][px] != 0) {
                    if (taulell[yN + py][xN + px] != 0) {
                        resultat = true;
                    }
                }
            }
        }
        
        return resultat;
        
    }
    
    this.abajo = function () {
        if (this.colisio(this.angle, this.y + 1, this.x) == false) {
            this.y++
        }
    }
    this.dreta = function () {
        
        if (this.colisio(this.angle, this.y, this.x + 1) == false) {
            this.x++
        }
    }
    
    
    
    this.esquerra = function () {
        
        if (this.colisio(this.angle, this.y, this.x - 1) == false) {
            this.x--
        }
    }
    this.nova()
    
}




function inicialitzaTeclat() {
    document.addEventListener("keydown", function (tecla) {
        if (tecla.key == "ArrowUp") {
            
            peça.rotar();
        }
        
        if (tecla.key == "ArrowDown") {
            peça.abajo();
            
            
        }
        
        if (tecla.key == "ArrowLeft") {
            peça.esquerra();
        }

        if (tecla.key == "ArrowRight") {
            peça.dreta();
        }
        
    }
)
}

let canço = new Audio("audio1.mp3")
document.getElementById("musica").addEventListener ("click", function () {
    let canço = new Audio("audio1.mp3")

    canço.play();
})

function inicia() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.style.width = ampleCanvas;
    canvas.style.height = altCanvas;
    
    peça = new objPeça();
    
    inicialitzaTeclat()
    
    setInterval(function () {
        principal()
    }, 1000 / fps);
}
function principal() {
    
    borrarCanvas();
    dibuixaTaulell();
    peça.caer();
    peça.dibuixa();
    
}

function borrarCanvas() {
    canvas.width = ampleCanvas;
    canvas.height = altCanvas;
}