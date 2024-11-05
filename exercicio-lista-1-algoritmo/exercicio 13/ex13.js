var altura = parseFloat(prompt("Informe sua altura:"));
var sexo = prompt("Informe seu sexo (M/F):");

var pesoIdeal;
var M;




if (sexo == "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    pesoIdeal = (62.1 * altura) - 44.7;
}

console.log("Seu peso ideal é:", pesoIdeal)

var pesoAtual = parseFloat(prompt("Insira o seu peso atual: "));

if (pesoAtual < pesoIdeal) {
    console.log(" Você está abaixo do peso ideal");
} else if (pesoAtual > pesoIdeal) {
    console.log(" Você está acima do peso ideal");
} else {
    console.log(" Você está no peso ideal");
}

