
const h1 = document.querySelector(`h1`);
const input1 = document.querySelector(`#calculo1`);
const input2 = document.querySelector(`#calculo2`);
const btn = document.querySelector(`btnCalcular`);
const pResult = document.querySelector(`#result`);

function btnOnClick(){ // pruebas de impresion y manipulacion, toma valores de input 1 y 2 los suma como string y como number
    console.log(input1.value + input2.value);

    console.log(Number(input1.value) + Number(input2.value));
    console.log("Escuchando el evento de click");

}

function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado " + sumaInputs;
}