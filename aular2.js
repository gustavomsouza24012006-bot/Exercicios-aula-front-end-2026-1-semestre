var nomeUsuario = prompt('Digite seu nome');
var titulo = document.getElementById('Nome');

if ((nomeUsuario == '') || (nomeUsuario == null)){
    alert("Nome não inserido!");
    var nomeUsuario = prompt('Pfr favor, digite seu nome');
    alert('Nome do usuario: ' + nomeUsuario);
    titulo.textContent = `Olá , ${nomeUsuario} !`


}else{
    alert('Nome do usuario: ' + nomeUsuario);
    titulo.textContent = `Olá , ${nomeUsuario} !`

}


var num = parseInt(prompt('Digite um numero entre 1 e 50 '));

if(num == 0){
    alert("Você digitou 0, precisa ser entre 1 e 50");

}
else if(num == null || num > 50 ){
    alert("Digite 1 numero valido, dentro do intervalo");
}
else{
     alert("Numero digitado com sucesso " + num);

}

