
    var num1 = parseFloat(prompt("Digite o primeiro numero: "))
    var num2 = parseFloat(prompt("Digite o segundo numero: "))

    function maiorNumero(num1, num2){
        if(num1> num2){
            let subtracao = num1 - num2;
            alert("O maior numero é: " + num1 + " e sua subitração é: " + subtracao)
        } else if(num2> num1){
            subtracao = num2 - num1
          alert("O maior numero é: " + num2 + " e sua subitração é: " + subtracao)
        }
    } 
     maiorNumero(num1,num2);
