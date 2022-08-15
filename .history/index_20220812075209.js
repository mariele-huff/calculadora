
const calculadora = document.querySelector('.calcularoda')
const teclas = document.querySelector('.teclas')
let resultado = document.querySelector('.resultado')
let tela = document.querySelector('.tela')
teclas.addEventListener('click' , verificaOperador, verificaNumero)



const ouvirTecla = () =>{
    this.classList.add('onclick');
    resultado = resultado.innerHTML = teclas.nodeValue
}

const verificaOperador = () =>{

}
const verificaNumero = () => {

    if(this.Text === Number ) {
        tela.innerHTML += this.Text
    }
}

const limpar = () => {
    resultado = ''
}

