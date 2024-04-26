/*Array of Multiples
*Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
*Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.*/


function arrayMultiplos (number,length){
    let multiples=[]; 
    x=1; //empieza multiplicando por 1 el parametro

 for (let i = 1; i <= length; i++) { 
        multiples.push(number*x); //calcula el multiplo del parametro number y lo agrega al array
        x++; // se suma 1 (2*1,2*2,2*3,2*++)
      }
      return multiples; //devuelve los multiplos en un array
    }
    console.log(arrayMultiplos(2,10));
    console.log(arrayMultiplos(17,6));
    console.log(arrayMultiplos(3,3));