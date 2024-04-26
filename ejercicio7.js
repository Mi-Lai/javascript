/*Antipodal Average
Given an array, return a shorter array following these steps:
- Split the array into two equal parts*.
... If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
[]va a regresar la mitad de los elementos lenght=6 , seria 3.

*/
const array=[1,2,3,5,22,6];

function shorterArray(arr) {
    // Step 1: Split the array into two equal parts
    const middleIndex = Math.floor(arr.length / 2);
    let firstPart, secondPart;
    if (arr.length % 2 === 0) {
        firstPart = arr.slice(0, middleIndex);
        secondPart = arr.slice(middleIndex);
    } else {
        firstPart = arr.slice(0, middleIndex);
        secondPart = arr.slice(middleIndex + 1);
    }

    // Step 2: Sum each number of the first part with the inverse numbers of the second part
    const resultArray = firstPart.map((num, index) => num + (1 / secondPart[index]));

    // Step 3: Divide each number of the resulting array by 2
    const finalArray = resultArray.map(num => num / 2);

    return finalArray;
}

console.log(shorterArray(array)); // Output will vary depending on the input array
