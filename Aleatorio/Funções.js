/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function desenha2d(cor, xi, yi, Xf, Yf) {

    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.fillRect(xi, yi, Xf, Yf);

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function desenhaQuadrado(x, y, cor) {

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    fincel.fillRect(x, y, 50, 50)
    pincel.fillStroke = 'black'
    pincel.fillRect(x, y, 50, 50)

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
        console.log('up arrow pressed')
    } else if (e.keyCode === 40) {
        console.log('down arrow pressed')
    } else if (e.keyCode === 37) {
        console.log('left arrow pressed')
    } else if (e.keyCode === 39) {
        console.log('right arrow pressed')
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function desenhaBolinha(x, y, raio, cor) {


    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}