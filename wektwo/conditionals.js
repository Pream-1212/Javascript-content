/**
 * if statement
if-else statement
if-else if-else chain
nested if statement
switch statement
ternary operator
if statement with logical operators in conditions**/

//Types of control flow of statement
/**
 * loops iteration/repeating statements
 * 1. for loop
 * 2. while loop
 * 3. do-while loop
 *
 */
//Exception Handling
/**
 * debugging
 * try--catch
 *
 */
//Transfer control
/**
 * return
 * break
 * continue
 */

//write if , someone is allowed to vote

// let age = prompt ("Please enter your age");
// age = Number(age);

// if (age>=18) {
//     window.alert("you are an adult and allowed to vote");
// }else {

//     window.alert("you are minor and not allowed to vote");
//  }

// let age = prompt("Please Enter Your Age:");
// age = Number(age);

// if (isNaN(age) || age < 0) {
//   window.alert("Please enter a valid age");
// } else {
//   if (age >= 18) {
//      window.alert("You are an adult you can vote");
//    } else {
//     window.alert("You are a minor can't vote");
//   }
// }

// //switch statement
// switch(expression){
//     case" value 1":
//     //write code when expression === value1
//     break;
//     case" value 2":
//     //write code when expression === value2
//     break;
//     case "value 3":
//     //write code when expression === value3
// default
//     //write code when non of the code matches
// }

// let paymentType = prompt("Enter payment method (Cash, Mobile money, Bank) ");
// switch (paymentType) {
//   case "Cash":
//     alert("process cash payment on the counter");
//     break;
//   case "Mobile Money":
//     alert("Verify your payment details before deliverying");
//     break;
//   case "Bank":
//     alert("confirm before proceeding");
//     break;
//   default:
//     //console.log(paymentType);
//     alert("unknown method please check again!");
// }

// let productType = prompt("Just input the type of product you are supplying (wood || furniture)");
// switch(productType){
//     case "wood":
//         alert("Store in warehouse");
//     //write code when expression === value1
//     break;
//     case "furniture":
//         alert("display in showroom" );
//     //write code when expression === value2
//     break;
//         //write code when expression === value3
// default:
//     alert("Please checkout again");
//write code when non of the code
//}

// //
// let number = prompt("Number of products wanted:");
// switch (true) {
//   case number > 0:
//     alert("Number is positive");
//     //write code when expression === value1
//     break;
//   case number == 0:
//     alert("number is 0");
//     //write code when expression === value2
//     break;
//   case number < 0:
//     alert("Number is negative");
//   //write code when expression === value3
//   default:
//     alert("Please Enter valid number!");
//   //write code when non of the code
//}

//how to use switch to control stock ?

// let stockCount = prompt("Enter Number of Product(wood, furniture):");
// //console.log("typeOfStockCount: ", typeof stockCount);
// switch (true) {
//   case stockCount > 20:
//     alert("You are in lack this product you want: ");
//     break;
//   case stockCount > 0 && stockCount <= 10:
//     alert("We are low on stock");
//     break;
//   case stockCount == 0:
//     alert("We are out of stock");
//     break;
//   default:
//     alert("Invalid Product!");
// }

// check discount
//  regular no discount
//  whole sale 15%
//  vip 10%
let discount = prompt("Check discount (Type wholesale, regular, or VIP): ");
switch (true) {
  case discount === "wholesale":
    alert("15%");
    break;
  case discount === "regular":
    alert("no discount");
    break;
  case discount === "VIP":
    alert("10%");
}
