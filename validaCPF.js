function validaCPF(n){
    if(n == 57652402085){
        return true;
    }else{
        return false;
    }
}

if(validaCPF(57652402085)){
    console.log('CPF válido')
}else{
    console.log('CPF inválido')
}
