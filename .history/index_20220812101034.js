const resultado = () => {
    let resultado = resultado.document.querySelector('#resultado').innerHTML
    return resultado
}

const acrescenta = (num)=> {

let numero =   document.querySelector('#resultado').innerHTML

document.querySelector('#resultado').innerHTML=numero + num

  

}

const limpar = () =>{
    let resultado =   document.querySelector('#resultado')
    resultado.innerHTML= " "
}

const voltar = () =>{
     resultado = document.querySelector('#resultado')
    resultado.innerHTML = resultado.substring(0, resultado.length -1)
    
}
const calcular = () => {
    if(resultado){
        let resultado = resultado.document.querySelector('#resultado').innerHTML = eval(resultado)
    }

}