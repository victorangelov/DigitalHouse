//Array dos alunos disponíveis
var nomesDosPresentes = ['Victor','Juan','Diego','Willian','Pedro'] 
//verifica se o aluno estava presente
function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
    //index off retorna a posição do array se for diferente de -1
    if(nomesDosPresentes.indexOf(nomeDoAluno) != -1){
        return true
    }else{
        //se o indexof for -1
        return false
    }
}
// atribuindo resultado da função na variável presente
var presente = estavaPresenteNaAula('Augusto',nomesDosPresentes)

//apresentando na tela. 
console.log(presente)