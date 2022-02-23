

let moviePrice = 3;
let lM = 3;
let bB = 5;
let h = 1;

totalPrice = (moviePrice * lM) + (moviePrice * bB) + (moviePrice * h);
console.log(totalPrice);


// How much bread?
let g = 400;
let a = 380;
let f = 350;

let ghr = 6;
let ahr = 4;
let fbhr = 10;

let totalPay = (g * ghr) + (a * ahr) + (f * fbhr);
console.log(totalPay);


//----------------- Classroom Cap --------------------//

let student = "emily";
let classroom = 22;
let classroomCap = 30;
let scheduleConflict = false;

classroom < classroomCap && scheduleConflict != true;

//----------------- Discounts -----------------//

const discount = .1;
let price = 10;
let currentDate = 2023;
let expiryDate = 2022;
let premium = false;
let minItems = 2;
let items = 2;

if (premium == true || currentDate < expiryDate && items > minItems) {
    price = price - (price * discount);
    console.log("Price comes out to $" + price + ".00.");
    return price;
} else {
    console.log("Price comes out to $" + price + ".00.")
    return price;
}


//----------------- Password Parameters -----------------//

let username = "AlexTheBeast";
let password = "besttaco";

password.length() > 5;
password != username;
username.length() < 20;
username.trim() === true && password.trim() === true;
