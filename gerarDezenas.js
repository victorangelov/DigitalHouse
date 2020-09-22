//função que puxa 6 dezenas de 1 a 60
function gerarDezenas(){
    //array que será preenchido com as dezenas
    array = []
    //for para percorrer o vetor
    for(var i = 0; i < 6; i++){
        //push para preencher o vetor com Math.raund que vai puxar valor inteiro, randowm que vai dar um número aleatório e 60 para pegar um número aleatório de 1 a 60
        array.push(Math.round(Math.random()*60))
    } 
    //retorna o vetor preenchido
    return array
}
console.log(gerarDezenas())
