var series = [
    "e a Pedra Filosofal",
    "e a Câmara Secreta",
    "e o Prisioneiro de Azkaban",
    "e o Cálice de Fogo",
    "e a Ordem da Fênix",
    "e o Enigma do Príncipe",
    "e as Relíquias da Morte"
  ]

function serie(prefixo,series){
    array = []
    for(var i = 0; i<series.length;i++){
        array.push(prefixo +' '+ series[i])
    }
    return array
}

console.log(serie('Harry Potter',series))

