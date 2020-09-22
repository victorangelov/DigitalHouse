function gerarDezenas(){
    array = []
    for(var i = 0; i < 6; i++){    
        array.push(Math.round(Math.random()*60))
    } 
    return array
}
console.log(gerarDezenas())
