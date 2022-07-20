"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adicionarNumeros(numero1, numero2, devPrintar, frase) {
    let resultado = numero1 + numero2;
    devPrintar ? console.log(frase + String(resultado)) : 0;
    return numero1 + numero2;
}
let devPrintar = true;
let frase = "O valor é: ";
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    adicionarNumeros(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), Number(input2 === null || input2 === void 0 ? void 0 : input2.value), devPrintar, frase);
    console.log(adicionarNumeros(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), Number(input2 === null || input2 === void 0 ? void 0 : input2.value), devPrintar, frase));
});
