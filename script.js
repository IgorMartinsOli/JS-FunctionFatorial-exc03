window.addEventListener('load', init);

function init(){
   document.querySelector("#botao").addEventListener('click', calcularFatorial);
}

function calcularFatorial(){
   let numero = parseInt(document.querySelector("#numero").value); //<input type="text id="numero" />
   if(numero < 0){
      document.querySelector("#resultado").innerHTML = "Digite um número positivo!";
      return;
   }
   let fatorial = 1;
   for(let i=1; i<=numero; i++){
      fatorial = fatorial * i;
   }
   document.querySelector("#resultado").innerHTML = `O fatorial de ${numero}! é ${fatorial}`;
}

