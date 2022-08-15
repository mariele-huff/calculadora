

const acrescenta = (num)=> {

let numero =   document.querySelector('#resultado').innerHTML

document.querySelector('#resultado').innerHTML=numero + num

  

}

const limpar = () =>{
    let resultado =   document.querySelector('#resultado')
    resultado.innerHTML= " "
}

const voltar = () =>{
    var resultado = resultado.document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado.substring(resultado.length -1) 
    
}
// const somar = (){

// }