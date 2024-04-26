/*Number divided into halves
Given a number, return the number divided into its halves in an array.
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5].*/
//Primero declaramos la variable x
const x=5;

function numDiv(n){
let res=[]; //nuevo array donde se guarda el resultado de la división
const mitad= n/2;
res.push(mitad); //agrega la primera mitad
res.push(mitad); //agrega la otra mitad
return res;
}
console.log(numDiv(x)); //imprime la función 

