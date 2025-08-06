//  MWF (Mayondo Wood & Furniture) Software Math Integration

// Numbers: Prices and Quantities (whole & decimal numbers)
let productPrice = 150000; // Whole number (integer)
let quantity = 2; // Integer
let transportRate = 0.05; // Decimal (5% transport charge)
let discountRate = 0.1; // Decimal (10% discount)

//Number + String → String



let result = 10 + " apples";
console.log(result); 
String + Number


let result4 = "I have " + 5;
console.log(result4); 
//Mixed numbers and strings


let result5 =  10 + 20 + " apples";
console.log(result5); //  (10 + 20 is done first, then concatenation)

let result2 = "apples " + 10 + 20;
console.log(result2); //  (string first, so everything becomes string)
 //Important Rule:

//If string comes first, everything after gets converted to string:


let result6 =  "5" + 10 + 20;
console.log(result6); 
//If numbers come first, they add up until a string appears:


let result7 = 5 + 10 + "20";
console.log(result7); 



// Math Object Property: Math.PI
console.log("Math.PI (used in measurements):", Math.PI); 

//  Total cost without transport or discount
let baseTotal = productPrice * quantity;
console.log("Base Total:", baseTotal);

// Apply 5% transport charge using Math.round
let transportCharge = Math.round(baseTotal * transportRate);
let totalWithTransport = baseTotal + transportCharge;
console.log("Transport Charge (rounded):", transportCharge);
console.log("Total with Transport:", totalWithTransport);

//  Apply 10% discount using Math.floor
let discountAmount = Math.floor(totalWithTransport * discountRate);
let finalAmount = totalWithTransport - discountAmount;
console.log("Discount Amount (floored):", discountAmount);
console.log("Final Amount to Pay:", finalAmount);

// Math.abs(): Ensure balance is displayed positively
let balance = -50000; // maybe a customer overpaid and we track it
console.log("Customer Refund (abs):", Math.abs(balance));

// Math.pow() and Math.sqrt(): Use in furniture workshop for measurements
let bedLength = 2; // meters
let bedWidth = 1.5; // meters

let area = bedLength * bedWidth;
let diagonal = Math.sqrt(Math.pow(bedLength, 2) + Math.pow(bedWidth, 2));

console.log("Bed Area (L x W):", area, "m²");
console.log("Diagonal Length (Pythagoras):", diagonal.toFixed(2), "m");

// Math.min() and Math.max(): Compare supplier prices
let supplierA = 145000;
let supplierB = 150000;
let supplierC = 140000;

let lowestPrice = Math.min(supplierA, supplierB, supplierC);
let highestPrice = Math.max(supplierA, supplierB, supplierC);

console.log("Lowest Supplier Price:", lowestPrice);
console.log("Highest Supplier Price:", highestPrice);

//Math Object Methods
//Here are the most useful ones
//1. Rounding Numbers
//2. Random Number
//3. Power and Roots
//4. Absolute Value
//5. Min and Max
//6. Trigonometric Functions
//7. Logarithmic Functions

 //Rounding Numbers
Math.round(4.7)// (round to nearest integer)

Math.floor(4.7) // (round down)

Math.ceil(4.2)//  (round up)

Math.trunc(4.9)// (remove decimal part)

//  Math.trunc(): Remove decimal points without rounding
let rawAmount = 125000.78;
console.log("Truncated Amount:", Math.trunc(rawAmount)); 

//Bonus: Natural Log (Math.log), log base 2 and 10
console.log("Math.log(1):", Math.log(1)); 
console.log("Math.log2(8):", Math.log2(8)); 
console.log("Math.log10(1000):", Math.log10(1000));

// Trigonometric
console.log("\nSine of 90 degrees:", Math.sin(Math.PI / 2));
console.log("Cosine of 0 degrees:", Math.cos(0));
console.log("Tangent of 45 degrees:", Math.tan(Math.PI / 4))
//. Trigonometric Functions
Math.sin(Math.PI / 2)

Math.cos(0)

Math.tan(Math.PI / 4) 