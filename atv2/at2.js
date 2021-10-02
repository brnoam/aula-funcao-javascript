
//** 1)  Criar uma função para receber dois parâmetros: numero e percentual. **//
//** a) Calcular a porcentagem de um número  usando a fórmula: **//
//**b)  Chamar a função e exibir o resultado no console. **//


function calc (numero,percentual){
    return (numero/100) * percentual
    
}

console.log(calc (25,100))



//**2) Criar uma função que recebe dois arrays como parâmetro e juntar os arrays: **//
//**a) Converter o array para string e retornar o resultado. **//
//**b) Chamar a função e exibir o resultado no console. **//


function transformar (ar1,ar2){

    var juntos = ar1.concat(ar2);
    var transicao =  juntos.toString();
    return transicao
}

console.log(transformar([4,0,0,2],[8,9,2,2]))