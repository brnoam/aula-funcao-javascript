//**1) Criar uma função para receber  uma string como parâmetro: **//
//**a) Contar a quantidade de palavras repetidas em uma frase e retornar o total. **//
//**b) Chamar a função e exibir o resultado no console.**/


function txt (str){
    let contagem = (str.match(/carro/ig).length)
    return contagem 

}

console.log (txt("carro,carro,carro,carro"))



//**2) Criar uma função que receba um array com 5 números como parâmetros: **//
//** a)  Inverter o array e retornar o resultado. **//
//**  b) Chamar a função e exibir o resultado no console.**//

function ar (array){
   
    var inverter = array.reverse();
    return inverter
} 

console.log (ar([1,2,3,4,5]))




//** 3) Criar uma função que receba 4 números inteiros positivos como parâmetros: **//
//** a) Calcular a soma de todos os números. **//
//** b) Retornar o Resultado. **//
//** c) Chamar a função e exibir o resultado no console.**//



function novo (n1,n2,n3,n4){
    let soma = n1+n2+n3+n4
    return soma
}

console.log(novo(1,2,3,4))
