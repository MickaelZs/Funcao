const readline = require('prompt-sync')();

function sorteio() {
    let sorteado = parseInt(Math.random() * 1000)
    let numUsuario = 0;

    console.log("ADIVINHE O NÚMERO")
    for(let tentativa = 1; tentativa <= 10; tentativa++) {
        console.log(`Tentativa ${tentativa}`);
        numUsuario = Number(readline());
        if (isNaN(numUsuario)) {
            throw new Error("ENFIA ESSA LETRA NO CU DA SUA MÃE")
        }
        if (numUsuario == sorteado) {
            tentativa = 30;
            console.log("ACERTO MISERAVI")
        }
        if (numUsuario < sorteado) {
            console.log("Maior")          
        }
        if (numUsuario > sorteado) {
            console.log("Menor")          
        }
        if (tentativa == 10 && numUsuario !== sorteado) {
            console.log(`perdeu!!! a resposta certa era ${sorteado}`)
        }
    }
    
}

sorteio()
