// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
    var [dia, mes, ano] = dataDeNascimento.split('/');
    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    var quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
 var idade = calcularIdade("23/10/1987")

function deixaEntrar(dataDeNascimento, censura){
    return calcularIdade(dataDeNascimento) > censura      
}

console.log(deixaEntrar('23/10/2015',20))