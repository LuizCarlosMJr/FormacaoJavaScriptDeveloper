//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "M".

const nomes = ['Ana', 'Maria', 'Odete', 'marta'];

for (let i = 0; i < nomes.length; i++) {
    let nomesComM = nomes[i][0];//coluna i linha 
    if (nomesComM == "M" || nomesComM == 'm') {
        console.log(nomes[i])
    }
   
}