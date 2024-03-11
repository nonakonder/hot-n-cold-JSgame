
const n = Math.floor(Math.random() * 100);
// constante do níumero aleatório gerado
console.log(n);

let t = 0;
// variável de tentativa
let button = document.querySelector("#button");
let message = document.querySelector("#message");
message.textContent = "";



function novaTentativa(){
    let n1 = document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;
    //let n3 = document.querySelector("#n3").value;
    let guess = parseInt( n1 + n2 );

    console.log(guess);
    // se eu colocasse a variavel para ser pega antes da funçao ela sempre iria retornan NaN pois ela pega sempre que é carregada a página :)

    while ( t < 10) {
        console.log(t);
        t++; 
        button.textContent = "Tentar Novamente";
        break;
    }
     //console.log(guess);

    // Entramos aqui na complexidade ciclomática kk 
    // consertei com a dica do menino de fazer condiçoes if em outra ordem com returns
    if ( t < 10){
    if (guess == n){
        console.log("Parabéns!!");
        message.textContent = (`Parabéns! Você conseguiu desvendar a senha secreta: ${n}`);
        return;
        // mensagem de ganhou botao de jogar de novo 
     }
    else{
        console.log("Ops! Tente de novo.");
        // Aqui vamos retornar o QUENTE ou FRIO 
        if( guess <= n + 2 && guess >= n - 2){
            console.log("Está fervendo");
            message.textContent = (`Seu palpite foi ${guess}. Está FERVENDO!!`);
            return;
        }
        if ( guess >= n + 30 || guess <= n - 30){
            console.log ("Está congelando");
           message.textContent = (`Seu palpite foi ${guess}. Está CONGELANDO!!`);

           return;
        }     
        if (guess > n + 20 || guess < n - 20 ){
            console.log("Está frio");
            message.textContent = (`Seu palpite foi ${guess}. Está frio!`);
            return;
        }
        if (guess > n + 10 || guess < n - 10 ){
            console.log("Está morno");
            message.textContent = (`Seu palpite foi ${guess}. Está morno!!`);
            return;
        }
        if (guess > n + 2 || guess < n - 2){
            console.log ("Quente");
            message.textContent = (`Seu palpite foi ${guess}. Está quente!!`);
            return ;
        }
        //fazer ifs dessa forma previne a complexidade ciclomática (só tem que pensar um cadinho)
    }
    }
    else{
        console.log(`Suas tentativas acabaram, a resposta correta é ${n}`);
        message.textContent = (`Suas tentativas acabaram, a resposta correta é ${n}!!`);
        return;
        // Aqui coloca a tela de derrota e o valor selecionado 
    }
    
}

