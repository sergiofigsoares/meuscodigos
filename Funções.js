/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function desenha2d(cor, xi, yi, Xf, Yf){

    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.fillRect(xi, yi, Xf, Yf);
    
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
function desenhaQuadrado(x, y, cor){

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = cor;
    fincel.fillRect(x, y, 50, 50)
    pincel.fillStroke = 'black'
    pincel.fillRect(x, y, 50, 50)

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////