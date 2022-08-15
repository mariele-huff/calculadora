
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
let mudaCorP= () => {
    document.body.style.background = 'black'
    document.getElementById('titulo').style.color = 'white'
    
    
    
}
let mudaCorB = () => {
    document.body.style.background = 'white'
    document.getElementById('titulo').style.color = 'black'
}
let mudaCorC = () => {
    document.body.style.background = 'grey'
    document.getElementById('titulo').style.color = 'black'
}
let mudaCorG = () => {
    document.body.style.backgroundImage = "url('img/fundo.jpg')"
    document.getElementById('titulo').style.color = 'white'
}















