/*Faça um programa para calcular o valor de combustível em uma viagem.

    Você terá 3 variáveis, sendo elas:
    1-Preço do Etanol;
    2-Preço do Etanol;
    3-Gasto médio de combustível do carro por Km;
    4-Distância em km de viagem;


    Imprima no console o valor que será gasto para realizar essa viagem em Reais.*/


const precoGasolina = 6.74;
const precoAlcool = 3.85;
var gastoMedio = 10 / 1;
var distanciaKm = 470.9;
combustivel = "Etanol"

var litrosViagem = distanciaKm / gastoMedio



if (combustivel === "Etanol") {
    var valorGasto = litrosViagem * precoAlcool
    console.log("O valor gasto em Etanol na viagem em Reais " + valorGasto.toFixed(2));
} else {
    var valorGasto = litrosViagem * precoGasolina
    console.log("O valor gasto na viagem em Reais " + valorGasto.toFixed(2));
}



