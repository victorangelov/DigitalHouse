function comissao(preco,comi){
    return preco * (comi / 100)
}

console.log(`Olá seu animal sua comissão foi de ${comissao(1000,10)}`)


function comissao(preco,porcentagem){
    var comissao = preco * (porcentagem / 100)
    return comissao
  }