var inicial = document.querySelector("#inicial");
var juros = document.querySelector("#juros");
var periodo = document.querySelector("#periodo");


function resultado(){
    var output = document.querySelector("#output");
    output.innerHTML = total
}

function calcular(){
    total = parseFloat(inicial.value) * parseFloat(juros.value) * parseFloat(periodo.value) / 100;
    total = total + parseFloat(inicial.value)
    resultado()
}
