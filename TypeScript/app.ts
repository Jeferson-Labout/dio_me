let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;



function adicionarNumeros(numero1:number, numero2:number, devPrintar:boolean, frase:String) {
    let resultado = numero1+numero2
    devPrintar?console.log(frase + String(resultado )):0;
    
    return numero1+numero2;
}



let devPrintar = true;
let frase = "O valor é: ";
 

button?.addEventListener('click',()=>{
    adicionarNumeros(Number(input1?.value), Number(input2?.value),devPrintar,frase);

    console.log(adicionarNumeros(Number(input1?.value), Number(input2?.value),devPrintar,frase));
});