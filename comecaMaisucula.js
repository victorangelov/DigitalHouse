//função que valida se a palavra é maiúscula
function comecaComMaiuscula(palavra){
    return /^[A-Z]/.test(palavra)
 }
 //array com as palavras
 var palavras = ["Amor", "copo", "Bolacha", "biscoito"]

 // Código que percorre o array e informa se a palavra começa com maisúcula ou não. 
 for(var i = 0; i < palavras.length; i++){
     if(comecaComMaiuscula(palavras[i]) == true){
         console.log(`A palavra ${palavras[i]} é maiúscula`)
     }else {
         console.log(`A palavra ${palavras[i]} não é maiúscula`)
     }
 }