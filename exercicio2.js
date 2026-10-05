var num1 = parseFloat(prompt("Digite o primeiro numero: "))
var num2 = parseFloat(prompt("Digite o segundo numero: "))

function numeromultiplo(num1, num2){
    if(num1 % num2 == 0){
        alert("Os numeros são multiplos");
    }
}
function numerosiguais(num1, num2){
    if(num1 == num2){
        alert("Os numeros são iguais");
    }

}
function maiorNumero(num1, num2) {
    if (num1 > num2) {
        alert("O maior numero é: " + num1);
    } else if (num2 > num1) {
        alert("O maior numero é: " + num2);
    }
}
 function verificarnumeros(num1, num2){
    maiorNumero(num1, num2);
    numerosiguais(num1, num2);
    numeromultiplo(num1, num2);

 }

 verificarnumeros(num1, num2)
