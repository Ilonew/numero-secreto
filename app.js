/*let titulo = document.querySelector("h1");
titulo.innerHTML= "Jogo do número secreto";

let paragrafo= document.querySelector("p");
paragrafo.innerHTML = "Escolha um número de 1 a 10. ";*/
let listaDeNumeroSorteados = [];
let limiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela("h1","Jogo do número secreto");
    exibirTextoNaTela("p","Escolha um número de 1 a 10.");
    reponsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
}
mensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativa > 1 ? "Tentativas" : "tentativa";
    let mensagemTentativa = `Você descobriu o número secreto ${tentativa} ${palavraTentativa}`;
    limparCampo();
    if(numeroSecreto == chute){
        exibirTextoNaTela("h1","Acertou!");
        exibirTextoNaTela("p",mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p","O número é menor");
        }else{
            exibirTextoNaTela("p","O número é maior");
        }
    }
    tentativa++;
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros +1);
   let quantidadeDeNumeroSorteados = listaDeNumeroSorteados.length;
   if (quantidadeDeNumeroSorteados == limiteDeNumeros ){
        listaDeNumeroSorteados = [];
   }
   if (listaDeNumeroSorteados.includes(numeroEscolhido)){
     return gerarNumeroAleatorio();
   }else{
     listaDeNumeroSorteados.push(numeroEscolhido);
     return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto =gerarNumeroAleatorio();
    mensagemInicial();
    limparCampo();
    tentativa = 1;
    document.getElementById("reiniciar").setAttribute("disabled",true);
}