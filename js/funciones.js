let valorA = 7;
let valorB = 11;

// let suma = valorA + valorB;
// console.log(suma);

// valorA = 14;
// valorB = -3;

// suma = valorA + valorB;
// console.log(suma);

// valorA = 20;
// valorB = 30;

// suma = valorA + valorB;
// console.log(suma);

//funciones js ES5
function comoyoquiera(arg1,arg2) {
    //hace algo
}
let A = 12;

function sumaDos(newA,newB){ //tipo void
    let suma = newA + newB;
    console.log(suma);
}

sumaDos(A,13);
sumaDos(1,213);
sumaDos(9,143);
sumaDos(5,130);


//funciones js ES6
const sumaTres = (newA,newB,newC) => {
    let suma = newA + newB +newC;
    return suma;
}

console.log(sumaTres(1,2,3));

Math.floor(Math.random()*9)
