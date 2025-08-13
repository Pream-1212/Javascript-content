//what are events? Is a triggered action by a user or the system or browser which



// let button= document.getElementById("myButton"); //this line for selecting a button

// button.addEventListener("click", function() { //this line is for adding a function to the button
//     console.log("Button was clicked!");
// });// can be captured and used to trigger a function or a block of code
//Events are actions that

// let button= document.getElementById("myButton"); //this line for selecting a button

// button.addEventListener("click", ()=> { //this line is for adding a function to the button
//     console.log("Button was clicked!");
// });// can be captured and used to trig


// let total = document.getElementById("total");
// let calcBtn= document.getElementById("calcBtn");


// function updateTotal() {
//     let price = Number(document.getElementById("price").value);
//     let qty = Number(document.getElementById("qty").value);
//     let cost = price * qty;
//     //  cost.toLocaleString();
//     total.textContent = `Total: UGX ${cost.toLocaleString()}`;
//     return cost;
// };

// calcBtn.addEventListener("click", updateTotal);


 const orderForm = document.getElementById("orderForm");
 orderForm.style.backgroundColor = "lightblue";

 const furniture = document.getElementById("furniture");

 const total = document.getElementById("total");

 const email = document.getElementById("email");

const customer= document.getElementById("customer");



function updateTotal() {
   const price = Number(document.getElementById("price").value);
    const qty = Number(document.getElementById("qty").value);
    const cost = price * qty;
    total.textContent = `Total: UGX ${cost.toLocaleString()}`;
}
price.addEventListener("input", updateTotal);
 qty.addEventListener("input", updateTotal); 

