
const calculadora = document.querySelector('.calcularoda')
const teclas = document.querySelector('.teclas')
let resultado = document.querySelector('.resultado')
teclas.addEventListener('click' , ouvirTecla)



const ouvirTecla = () =>{
    this.classList.add('onclick');
    resultado = resultado.innerHTML = teclas.nodeValue
}

const verificaOperador = () =>{
    
}
const verificaNumero = () => {

    if(this.Text === Number ) {
        resultado.innerHTML += this.Text
    }
}

const limpar = () => {
    resultado = ''
}

