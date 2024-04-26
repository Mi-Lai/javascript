//Sum of Resistors in Series
 
//Calculate the sum of all resistors connected in series.
//Examples:
//- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
//- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
//- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

//Note: This approach uses the absolute value of each resistance to ensure all values are positive.
const resistance=[-1,5,6,3];
const resistance2=[14,3.5,6];
const resistance3=[8,15,100];

let suma=0;
for (let i = 0; i < resistance.length; i++) {
  suma+= Math.abs(resistance[i]);
}
console.log("La suma de la resistencia es "+ suma+ " ohms")

var suma2=0;
for (let i = 0; i < resistance2.length; i++) {
    suma2+= Math.abs(resistance2[i]);
  }
console.log("La suma de la resistencia es "+ suma2+ " ohms")

let resultado=0;
for (let i = 0; i < resistance3.length; i++) {
    resultado+= Math.abs(resistance3[i]);
  }
console.log("La suma de la resistencia es "+ resultado+ " ohms")
//// otra forma más generalizada
//Dada las variables ya declaradas anteriormente, definimos una función

function sumResitance(arr) {
const arreglo=[]; // guardar los nuevos valores en este array
let resultado=0; //aqui el resultado
arr.forEach((element )=> arreglo.push(Math.abs(element))); // de cada elemento de nuestro parametro tome el valor absoluto
arreglo.forEach((element)=> (resultado=resultado+element)) ;// suma cada elemento del nuevo array con los valores absolutos y los guarda en resultado.
console.log(`${resultado} ohms`) ;   
}
sumResitance(resistance)
sumResitance(resistance2)
sumResitance(resistance3)