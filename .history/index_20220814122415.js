ativarBotao();

function ativarBotao()
{
    let botao = document.querySelectorAll(".botao:not(.ativada)");

    for (var i = 0; i < botao.length; i++) {
        let botaos = botaos[i];
        botao.classList.add("ativada");
        botao.addEventListener("click", clicarCaixa);
        
    }

}


function clicarCaixa()
{
    this.classList.add('onclick');
    this.innerHTML = "CLICADO"
}
let acrescenta = (num) => {

    let numero = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = numero + num

}

let limpar = () => {
    let resultado = document.querySelector('#resultado')
    resultado.innerHTML = " "
}

let voltar = () => {
    let resultado = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length - 1)

}
let calcular = () => {

    let resultado = document.querySelector('#resultado').innerHTML
    if (resultado) {
        let aresult = document.querySelector('#resultado').innerHTML = eval(resultado)

    }
}




      
    







