var a = "";
var b = "";
var c = "";

function PegarInfo(){

    a = document.getElementById('texto1').value;
    document.getElementById('paragrafo1').innerHTML = a;

    b = document.getElementById('texto2').value;
    document.getElementById('paragrafo2').innerHTML = b;

    c = document.getElementById('texto3').value;
    document.getElementById('paragrafo3').innerHTML = c;
}