/*Faça um programa para calcular o valor de combustível em uma viagem.

    Você terá 3 variáveis, sendo elas:
    1-Preço do combustível;
    2-Gasto médio de combustível do carro por Km;
    3-Distância em km de viagem;

    Imprima no console o valor que será gasto para realizar essa viagem em Reais.*/

    const precoCombustivel = 6.74;
    var gastoMedio = 10/1 ;
    var distanciaKm = 470.9;

    var litrosViagem = distanciaKm/gastoMedio

    var valorGasto = litrosViagem * precoCombustivel

    console.log("O valor gasto na viagem em Reais " + valorGasto.toFixed(2) );

