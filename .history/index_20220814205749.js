
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
let mudaCorAz = () => {
    document.getElementById('resultado').style.background = 'blue'
    
    
    
}
let mudaCorRos = () => {

    document.getElementById('resultado').style.background = 'palevioletred'
}
let mudaCorAm = () => {

    document.getElementById('resultado').style.background = 'yellow'
}
let mudaCorRox = () => {

    document.getElementById('resultado').style.background = 'blueviolet'
}



let historico = () => {

    let hist = document.createElement('div')
    hist.style.width = '300px'
    hist.style.height = '300px'
    hist.style.marginLeft = '37%'
    hist.style.marginTop = '100px'
    hist.style.background = 'white'

    document.body.appendChild(hist)



}











