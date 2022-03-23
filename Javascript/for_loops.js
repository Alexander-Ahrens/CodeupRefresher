

function showMultiplicationTable() {
    for(let i = 1; i < 11; i++) {
        let j = 7;
        let k = i * j;
        console.log(j + " x " + i + " = " + k);
    }
}

showMultiplicationTable();

console.log("=====================================");

function count() {
    let x = 0;
    while (x < 100) {
        x++;
        console.log(x);
    }
}
//count();

console.log("=====================================");


function oddEven(min, max) {
    let x = 0;
    while (x > 100){
        x = Math.floor(Math.random() * (max - min) + min);

        if (x % 2 !== 0) {
            console.log(x + " is an odd number.");
        } else {
            console.log(x + " is an even number.");
        }
    }
}
oddEven(20, 200);
