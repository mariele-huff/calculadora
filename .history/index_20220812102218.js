 resultado = () => {
    let resultado = resultado.document.querySelector('#resultado').innerHTML
    return resultado
}

 acrescenta = (num)=> {

let numero =   document.querySelector('#resultado').innerHTML

document.querySelector('#resultado').innerHTML=numero + num
 }
  
limpar = () =>{
    let resultado =   document.querySelector('#resultado')
    resultado.innerHTML= " "
}

 voltar = () =>{
     resultado =  document.getElementById('resultado').innerHTML
     document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
     

    
}
calcular = () => {
    if(resultado){
        let resultado = resultado.document.querySelector('#resultado').innerHTML = eval(resultado)
    }

}