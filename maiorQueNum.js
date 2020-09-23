numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]

function maiorQueNum(num,numeros){
    maiores = []
    for(var i = 0; i < numeros.length; i++){
        if(num < numeros[i]){
            maiores.push(numeros[i])
        }  
    }
    return maiores
}

console.log(maiorQueNum(5,numeros))