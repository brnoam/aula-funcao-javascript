//** 1) Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:**//
//**a)  Ordenar os elementos do array na ordem invertida **//

function norte () {
    
    var estados = ["Amapá","Pará","Amazonas"]
    estados.reverse();
    return estados
    
}

console.log(norte())



//** 2) Criar uma função que recebe duas strings: **// 
//** a) Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().  **//
//** b) Concatenar as duas strings e retornar o resultado. **//
//** c) Chamar a função e exibir no console o resultado. **//



function textos (texto1,texto2){
  
    var par1 = texto1.toUpperCase();
    var juntas = par1.concat(texto2)
    return (juntas);
}

console.log (textos('Céu ','Mar'))




//** 3) Criar uma função que retorne 17 vezes a palavra Repetição. **// 
//** a) Chamar a função e exibir no console o resultado.**//


function rept () {
    for (let rpt = 1; rpt <= 17; rpt++){
        console.log  ("Repeticão")
    }
} rept();
