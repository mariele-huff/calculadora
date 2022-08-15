let nome = prompt('Digite seu nome aqui')

 frase = document.querySelector(".frase")
     p = document.createElement('p')
    p.innerHTML = `Olá, ${nome}, seja bem-vindo a esse site que só tem uma calculadora :) use e abuse deste artefato precioso`
    frase.appendChild(p);

let acrescenta = (num)=> {
let resultado =  document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1)
let numero =   document.querySelector('#resultado').innerHTML

document.querySelector('#resultado').innerHTML=numero + num
 }
  
 let limpar = () =>{
    let resultado =   document.querySelector('#resultado')
    resultado.innerHTML= " "
}

 let voltar = () =>{
     let resultado =  document.querySelector('#resultado').innerHTML
     document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1)
     

    
}
 let calcular = () => {
   let resultado = document.querySelector('#resultado').innerHTML
    if(resultado){
        document.querySelector('#resultado').innerHTML = eval(resultado)
    }

}