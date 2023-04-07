const notas = [];

//Adicionando posições no array
notas.push(10);
notas.push(5);
notas.push(8);
notas.push(9);
notas.push(3);
notas.push(8);

//Percorrendo todas as posições do array
//somando as notas
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const element = notas[i];
    console.log(element);
    soma = soma + element
}

console.log(soma);

//Imprimindo a média
console.log(`A soma das notas é ${soma} e a  Média do semestre é ${(soma/notas.length).toFixed(2)} `);
