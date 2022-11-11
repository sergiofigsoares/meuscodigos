
function tocaSom(event){

    document.querySelector(event).play();

}

const lista = document.querySelectorAll('.caixa')

let contador = 0

while(contador< lista.length){

const tecla = lista[contador]
const instrumento = tecla.classList[1]

const idAudio = `#${instrumento}`;

// console.log(idAudio)


    tecla.onclick = function () {

        tocaSom(idAudio);

    }
    contador++
    console.log(contador);

}
