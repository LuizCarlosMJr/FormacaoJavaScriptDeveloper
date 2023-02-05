//Como saber se um número é par
const numero = (Math.random(10-1)*10).toFixed(0);

const isnumeroPar = (numero % 2) === 0; //Expressão que retorna um valor boolean
//usa-se o "is" na frente do nome para determinar o boolean
if(isnumeroPar){
    console.log("O número "+ numero +"  é par");
}

if(!isnumeroPar){
    console.log("O número "+ numero +" é Ímpar");
}

//Número diviséivel por 5

const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero===0){
    console.log("Número é inválido");
} else if(numeroDivisivelPor5){
    console.log("Sim, ele é divisível por 5");
}else{
    console.log("Não é divisível por 5");
}