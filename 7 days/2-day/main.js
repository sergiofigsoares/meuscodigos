var inputName = "";
var inputAge = "";
var inputLanguage = "";


function myFunction() {

    var inputName = document.getElementById("nome").value;
    var inputAge = document.getElementById("idade").value;
    var inputLanguage = document.getElementById("lingua").value;
    var inputLike = document.getElementById("like").value;

    // document.getElementById('output1').innerHTML = inputName
    // document.getElementById('output2').innerHTML = inputAge
    // document.getElementById('output3').innerHTML = inputLanguage
    var gostando = ""
    if (inputLike == 'sim'){

        gostando = "esta"
    }
    if(inputLike!="sim"){

        gostando = "não esta"


    }
    event.preventDefault();

    

    var text = "ola " + inputName + " voce tem " + inputAge + " anos e esta estudando " + inputLanguage +" e " + gostando + " gostando "
    document.getElementById('output').innerHTML = text
}