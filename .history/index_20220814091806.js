
let acrescenta = (num) => {
    let numero = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = numero + num
}


let n1 = document.querySelector('#resultado')
let numeros = [10]
for (let index = 0; index < numeros.length; index++) {
    if (n1 === Number) {
        numeros[index] = n1
    }
}

let limpar = () => {
    let resultado = document.querySelector('#resultado')
    resultado.innerHTML = " "
}


let voltar = () => {
    let resultado = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length - 1)

}

let operacao = (op) => {
        if (op === NaN) {
            return op
            
        }
    }


let calcular = () => {
  let  operador = operacao()
  let result = ''
  if( operador === '+'){
    result = numeros[0] + numeros[1]
  }else if (operador === '-'){
    result = numeros[0] - numeros[1]
  }else if (operador === '*'){
    result = numeros[0] * numeros[1]
  }else if (operador === '/'){
    result = numeros[0] / numeros[1]
} 
document.querySelector('#resultado').innerHTML = result
} 


