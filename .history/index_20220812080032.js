
const calculadora = document.querySelector('.calcularoda')
const teclas = document.querySelector('.teclas')
let resultado = document.querySelector('.resultado')
let tela = document.querySelector('.tela')
// teclas.addEventListener('click' , ouvirTecla)


	let tecla = document.getElementsByClassName("Numeros")
    
		console.log(tecla)
		

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

