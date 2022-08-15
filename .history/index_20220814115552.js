let botoes = document.querySelectorAll('.botao')

botoes.addEventListener("click", cliqueBotao)

 const cliqueBotao = () =>{
    this.classList.add('onclick')
    this.innerHTML= clicou!
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




      
    







