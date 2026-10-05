var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));

function numeromultiplo(num1, num2) {

    if (num2 == 0) {
        alert("Não é possível verificar múltiplo de 0.");
        return;
    }

    if (num1 % num2 == 0) {
        alert("Os números são múltiplos.");
    }
}

function numerosiguais(num1, num2) {

    if (num1 === num2) {
        alert("Os números são iguais.");
    }
}

function maiorNumero(num1, num2) {

    if (num1 > num2) {
        alert("O maior número é: " + num1);

    } else if (num2 > num1) {
        alert("O maior número é: " + num2);
    }
}

function verificarnumeros(num1, num2) {

    maiorNumero(num1, num2);
    numerosiguais(num1, num2);
    numeromultiplo(num1, num2);
}

verificarnumeros(num1, num2);