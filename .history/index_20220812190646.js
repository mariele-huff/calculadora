let resultado =()=>{
    document.querySelector('#resultado').innerHTML
}
let acrescenta = (num)=> {

let numero =   resultado()

resultado()=numero + num
 }
  
 let limpar = () =>{
    let resultado =  resultado()
    resultado.innerHTML= " "
}

 let voltar = () =>{
     let resultado =  resultado()
    resultado() = resultado.substring(0, resultado.length -1)
     

    
}
 let calcular = () => {
   let resultado = resultado()
    if(resultado){
        resultado() = eval(resultado)
    }

}