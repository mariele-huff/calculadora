
const calculadora = document.querySelector('.calcularoda')
const teclas = document.querySelector('.teclas')
let resultado = document.querySelector('.resultado')
let tela = document.querySelector('.tela')
teclas.addEventListener('click' , ouvirTecla)


		document.getElementsByClassName("Numero").addEventListener("click", verificaNumero )
		
		

const ouvirTecla = () =>{
    this.classList.add('onclick');

    
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

