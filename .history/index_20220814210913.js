
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
    document.body.style.background = 'black'
    document.getElementById('titulo').style.color = 'white'
    
    
    
}
let mudaCorRos = () => {

    document.body.style.background = 'palevioletred'
}
let mudaCorAm = () => {

    document.body.style.background = 'yellow'
}
let mudaCorGr = () => {

    document.body.style.background = 'green'
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











