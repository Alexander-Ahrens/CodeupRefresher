

// #1
function isTrue(input) {
    if (input !== true) {
        console.log("false");
    } else {
        console.log("true");
    }
}

isTrue(true);
isTrue(false);
isTrue(0);
isTrue(null);
isTrue("true");
isTrue("Banana");
isTrue([1,2]);


// #2
function isFalse(input2) {
    if (input2 === false) { 
        console.log("true"); 
    } else {
        console.log("false");
    }
}
console.log(" ");
console.log("-------------------");
console.log(" ");
isFalse(false);
isFalse(true);
isFalse(0);
isFalse(null);
isFalse(" ");
isFalse("Banana");
isFalse([1,2]);

// #3
function not(input3) {
    if (input3 !== false) {
        console.log(!input3);
    } else if (input3 !== true) {
        console.log(!input3);
    }
}

console.log(" ");
console.log("-------------------");
console.log(" ");
not(false);
not(0);
not("");
not(null);
not(NaN);
not(true);
not("something");
not(Infinity);
not(123);


// #4
function addOne(x) {
    x = x + 1;
}