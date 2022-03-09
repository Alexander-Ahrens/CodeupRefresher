

// #1
// function isTrue(input) {
//     if (input !== true) {
//         console.log("false");
//     } else {
//         console.log("true");
//     }
// }

// isTrue(true);
// isTrue(false);
// isTrue(0);
// isTrue(null);
// isTrue("true");
// isTrue("Banana");
// isTrue([1,2]);


// #2
// function isFalse(input2) {
//     if (input2 === false) { 
//         console.log("true"); 
//     } else {
//         console.log("false");
//     }
// }
// console.log(" ");
// console.log("-------------------");
// console.log(" ");
// isFalse(false);
// isFalse(true);
// isFalse(0);
// isFalse(null);
// isFalse(" ");
// isFalse("Banana");
// isFalse([1,2]);

// #3
// function not(input3) {
//     if (input3 !== false) {
//         console.log(!input3);
//     } else if (input3 !== true) {
//         console.log(!input3);
//     }
// }


// console.log(" ");
// console.log("-------------------");
// console.log(" ");
// not(false);
// not(0);
// not("");
// not(null);
// not(NaN);
// not(true);
// not("something");
// not(Infinity);
// not(123);


// #4
function addOne(x) {
     if(x >= -1 || x <= 1) {
        x == parseInt(x) + 1;
        console.log(x);
    } else if(x > -1 || x< 1) {
        x = x + 1;
        console.log(x);
    } else if(x !== true || x !== false) {
        console.log(NaN);
    } else {
        console.log(NaN);
    } 
}

<<<<<<< HEAD
// console.log(" ");
// console.log("-------------------");
// console.log(" ");
addOne(0);
addOne(2);
addOne(-5);
addOne(5.789);
addOne(Infinity);
addOne("2");
addOne("0");
addOne("banana");
addOne(true);
addOne(NaN);
=======
console.log("---------");
console.log(" ");
console.log("#1");
isTrue(true);
isTrue(false);
isTrue(0);
isTrue(null);
isTrue("true");
isTrue("Banana");
isTrue([1,2]);
>>>>>>> ten-functions


function isIdentical(x, y) {
    if(x !== y) {
        console.log(false);
    } else {
        console.log(true);
    }
}
<<<<<<< HEAD
console.log("---------");
isIdentical(3, 3);
isIdentical(false, false);
isIdentical(true, true);
isIdentical("hello", "hello");
isIdentical(3, 3.0);
isIdentical(2, "2");
isIdentical("javascript", "java");
console.log("---------");


function isEqual(s, p) {
    if(s == p) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isEqual(3, "3");
isEqual("abc123", "abc123");
isEqual(true, 1);
isEqual(0, false);
isEqual(4, -5);
isEqual("java", "javascript");
console.log("---------");


=======
console.log(" ");
console.log("-------------------");
console.log(" ");
console.log("#2");
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
    } else if (input3 === false) {
        console.log(!!input3);
    }
}


console.log(" ");
console.log("-------------------");
console.log(" ");
console.log("#3");
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
     if(x >= -1 || x <= 1) {
        x == parseInt(x) + 1;
        console.log(x);
    } else if(x > -1 || x< 1) {
        x = x + 1;
        console.log(x);
    } else if(x !== true || x !== false) {
        console.log(NaN);
    } else {
        console.log(NaN);
    } 
}

console.log(" ");
console.log("-------------------");
console.log(" ");
console.log("#4");
addOne(0);
addOne(2);
addOne(-5);
addOne(5.789);
addOne(Infinity);
addOne("2");
addOne("0");
addOne("banana");
addOne(true);
addOne(NaN);


// #5
function isEven(a) {
    if(a % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

console.log(" ");
console.log("---------");
console.log(" ");
console.log("#5")
isEven(2);
isEven(-8);
isEven(0);
isEven("42");
isEven(1);
isEven("-3");
isEven(false);
isEven("banana");


// #6
function isIdentical(x, y) {
    if(x !== y) {
        console.log(false);
    } else {
        console.log(true);
    }
}
console.log(" ");
console.log("---------");
console.log(" ");
console.log("#6")
isIdentical(3, 3);
isIdentical(false, false);
isIdentical(true, true);
isIdentical("hello", "hello");
isIdentical(3, 3.0);
isIdentical(2, "2");
isIdentical("javascript", "java");


function isEqual(s, p) {
    if(s == p) {
        console.log(true);
    } else {
        console.log(false);
    }
}

console.log(" ");
console.log("---------");
console.log(" ");
console.log("#7")
isEqual(3, "3");
isEqual("abc123", "abc123");
isEqual(true, 1);
isEqual(0, false);
isEqual(4, -5);
isEqual("java", "javascript");
console.log("---------");


>>>>>>> ten-functions
function or(i, j) {
    if(i >= j) {
        console.log(true)
    } 
}
