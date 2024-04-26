/*Positive dominance in Array
 Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/
// que cuente cuantos elementos positivos y negativos hay en un array
// positively dominant = hay mas positivos True, sino false

const array=[-1, -3, -5, 4 ,6767]; //false
const array1=[-1, 3, 10, 4 ,67]; //True
const array2=[-1, -3, -5, -4 ,67]; //False

function positiveDom(arr){
    let positivos=0;
    let negativos=0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positivos++;
        } else if (array[i] < 0) {
            negativos++;
        } 
    }

    if (positivos>negativos)
        {
            return true;
        }
        else {
            return false;
    }
} 
console.log(positiveDom(array)); 
console.log(positiveDom(array1)); 
console.log(positiveDom(array2)); 