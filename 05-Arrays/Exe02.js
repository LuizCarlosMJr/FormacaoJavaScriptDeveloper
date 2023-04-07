//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numbers = [10,9,8,7,6,5,4,3,2,1];
const numberPar=[];
let numerosPares;
for (let i = 0; i <= numbers.length; i++) {
   
    if (numbers[i]%2==0) {
      numberPar.push(numbers[i]); //Array de números Pares
      numerosPares = numbers[i];
      console.log(numerosPares);
    }
}

//console.log(numberPar);
