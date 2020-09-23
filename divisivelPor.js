numeros = [3,4,5,6,7,8,9,0]

function buscarDivisivelPor(numero,numeros){
    for(var i = 0; i< numeros.length;i++){
        if(numero % numeros[i] == 0 && numeros[i] != 0){
            return numeros[i]
        }else{
            
        }
    }
    return `Nenhum número valido encontrado`
}

console.log(buscarDivisivelPor(8,numeros))

