 let resultado = () => {
    let resultado = resultado.document.querySelector('#resultado').innerHTML
    return resultado
}

 let acrescenta = (num)=> {

let numero =   document.querySelector('#resultado').innerHTML

document.querySelector('#resultado').innerHTML=numero + num
 }
  
 let limpar = () =>{
    let resultado =   document.querySelector('#resultado')
    resultado.innerHTML= " "
}

 let voltar = () =>{
     resultado =  document.querySelector('#resultado').innerHTML
     document.querySelector('resultado').innerHTML = resultado.substring(0, resultado.length -1)
     

    
}
 let calcular = () => {
    resultado = document.querySelector('#resultado').innerHTML
    if(resultado){
        document.querySelector('#resultado').innerHTML = eval(resultado)
    }

}