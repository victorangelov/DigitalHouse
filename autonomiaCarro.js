//cálculo de autonomia
function autonomia(quantidadeDeCombustivel, rendimento){
    //rendimento é o km/litro que o carro faz.
    return quantidadeDeCombustivel * rendimento
}

console.log(autonomia(40,8))