

function imprimir_algo(val){
    var visor = document.getElementById("resultado");
    visor.innerHTML = visor.innerHTML + val;
   
}
function calcular(){
    var visor = document.getElementById("resultado");
    visor.innerHTML = eval(visor.innerHTML);
   
}
function apagar(){
    var visor = document.getElementById("resultado");
    visor.innerHTML = "";
   
}
