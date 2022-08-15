const resultado = () =>{
    let resultado = document.querySelector('#resultado').innerHTML
    return resultado
}

const acrescenta = (num) => {

    let numero = resultado()

   numero += num
   console.log(resultado())
}

const limpar = () => {
    let resultado = resultado()
    resultado.innerHTML = " "
}

const voltar = () => {
   resultado().innerHTML
   resultado().innerHTML = resultado.substring(0, resultado.length -1)

}

const calcular = () => {
    if (resultado) {
        let resultado = resultado().innerHTML = eval(resultado)
    }

}