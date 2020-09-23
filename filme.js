/*Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema. 

A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o tamanho de um dos arrays fornecidos e retornar uma frase com o seguinte modelo: 



"personagem é um personagem do filme filme que estreou no cinema em lançamento." 



Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida."
*/
var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]


function filme(personagens,filmes,lancamentos,id){
    id = id -1
    if(id < 0 || id != personagens.length - 1){
        return `a opção ${id} não é uma opção válida.`
    }else {
        return `${personagens[id]} é um personagem do filme ${filmes[id]} que estreou no cinema em ${lancamentos[id]}.`
    }
}

console.log(filme(personagens,filmes,lancamentos,3))

console.log(personagens.length)