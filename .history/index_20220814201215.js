
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
    // i++

    let resultado = document.querySelector('#resultado').innerHTML
    if (resultado) {
    let aresult = document.querySelector('#resultado').innerHTML = eval(resultado)
//    if (i>10){
//     i--
//    }
//     let calculos = []
//     calculos[i].push(aresult)

//     return calculos
}

}

let historico = () => {

let hist = document.createElement('div')
hist.style.width = '100px;'
hist.style.height = '400px'
hist.style.marginLeft = '35%'
hist.style.marginTop = '100px'
hist.style.background='white'
document.body.appendChild(hist)
    
   

}











