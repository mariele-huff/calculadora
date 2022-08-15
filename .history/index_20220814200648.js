
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
i=0
let calcular = () => {
    i++

    let resultado = document.querySelector('#resultado').innerHTML
    if (resultado) {
    let aresult = document.querySelector('#resultado').innerHTML = eval(resultado)
   if (i>10){
    i--
   }
    let calculos = []
    calculos[i].push(aresult)

    return calculos
}
console.log(calcular)
}

let historico = () => {

let hist = document.createElement('div')
hist.style.width = '250px;'
hist.style.height = '400px'

    
   

}











