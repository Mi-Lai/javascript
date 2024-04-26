/*Antipodal Average
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*.
... If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
-Divid /2 ulting array by 2.
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
[]va a regresar la mitad de los elementos lenght=6 , seria 3.

*/
const array=[1,2,3,5,22,6];

function shorterArray(arr) {
    // Split the array into two equal parts (length)
    const middleArr= Math.floor(arr.length / 2); //middleArr guarda el resultado absoluto (math.floor) de la división
if (arr.length % 2!==0) {
// id unequal
arr.splice(middleArr,1);
}
// Sum each number of the first part with the inverse numbers of the second part.
let resultado=[];
for( i=0; i<middleArr; i++){
    let sum= arr[i]+arr[arr.length-1-i];
    resultado.push(sum/2);
}
return resultado;
}
console.log(shorterArray(array));