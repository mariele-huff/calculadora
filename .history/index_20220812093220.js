

const acrescenta = (num)=> {

let numero =   document.querySelector('#resultado').innerHTML

document.querySelector('#resultado').innerHTML=numero + num

  

}

const limpar = () =>{
    let resultado =   document.querySelector('#resultado')
    resultado.innerHTML= " "
}

const volta = () =>{
    let resultado = resultado.document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.lenght -1)
}
// const somar = (){

// }