function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
 }
  
 function maisCarosQue(valor, precos){
    return precos.filter(p => p >= valor);
 }

 function precosEntre(valorMenor, valorMaior, precos){
    return maisCarosQue(valorMenor, maisBaratosQue(valorMaior, precos))   
 }


 var precos = [1,3,76,43,5,7,9,7,675,4,343,7,8,545,87,43,234,76,]

 console.log(maisBaratosQue(3,precos))

 console.log(maisCarosQue(600,precos))

 console.log(precosEntre(10, 100,))