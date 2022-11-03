const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is : ${num1 + num2}`);
}
// Llamamos a la función, si utilizamos require directamente en otro modulo/archivo, se ejecutará la función sin necesidad de exportar.
addValues();