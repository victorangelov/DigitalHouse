var palavras = ['Oi','como','vai','otário']

function transformarParaMaiusculo(palavras){
    var pMaiusc = []
    for(var i = 0; i < palavras.length; i++){
        pMaiusc.push(palavras[i].toUpperCase())
    }
    return pMaiusc
}

console.log(transformarParaMaiusculo(palavras))
