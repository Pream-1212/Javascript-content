let personobject = {
name: "Dottie_Grey_cupboard",
width : 6,
height:2.6,
quantity:1,



}

// let sp= 750000
// let product = 5/100 * sp
// console.log(product);
// // functionadd(sp,){
// //     return sp+}


// let totalCost = product+ sp
// console.log(totalCost)

// function calctotalCost(sp, quantity){
//     const product = 0.05
//     // let sp = 750000
//     transport =  sp*product
//     let totalcost = quantity*sp + transport+1
//     return totalcost
       
// }

// console.log(calctotalCost(750000, 5));
// console.log(calctotalCost(500000, 1));
// console.log(calctotalCost(1200000,2));
// console.log(calctotalCost(750000,1));
// console.log(calctotalCost(1500000,2));
// console.log(calctotalCost())




//functions with strings

// function printfullname(){
//     let firstname= "Pream";
//     let lastname="Queen";
    
// let fullname = firstname + lastname
// return fullname
// }
// console.log(printfullname());

// let actions=[function greet(){
//     console.log("hello")
// },
// function calculate(){
//     console.log(1+1)
// },
// function thankyou(){
//     console.log("thank you for using our system")
// }

// actions[0]();
// actions[1]();
// actions[2]();
// console.log(actions)
// }
//functions with objects
let unitprice
let sp
let product
let quantity
let productName
let transportfee
let paymentmethod
// let calctotalCost

let order = {
    sp: 1000000,
    quantity:3,
    calctotalCost: function(){
        return this.sp*this.quantity 
        
    }
}
order.sp
order.quantity
console.log(order.calctotalCost());

let car={
    name: "prado",
    weight:1000,
    start: function(){
        return "vroom"


    }
}
car.name
console.log(car.weight);
car.start()
console.log(car.start())
console.log(car.name+car.weight)
//coaching

let Lorah={
    weight:40,
    age:20,
    firstname:"Lora",
    walk:function(){
       return this.firstname+' is walking' 
    }
}
console.log(Lorah.walk())
console.log(this)
let Luke ={
    weight:53,
    age:20,
    firstname:"Luke",
    walk: function(){
        return this.firstname+'walking'
    }
}
console.log(Luke.walk())
//
//no.1 model a phone object 
//with properties;color,size,type
//with methods;take picture, play music, ring
//create 2 phone objects sumsang and iphone
//display the properties of the phone objects
//call the different methods of the phone objects


//no.2 model a user object 
//with properties;email, username, gender
//with methods;login, logout
//create 2 user objects Bob, Alice
//display the properties of the user objects
//call the different methods of the user objects

// //no.2
// let Bob={
//     email:"boo@gmail.com",
//     gender:"male",
//     username:"Bob",
//     login: function(){
//         return this.username + " has logged in"; 
//     },
// logout:function (){
//     return this.username + " has logged out";
    
// },
// }
// console.log(Bob.login());
// console.log(Bob.logout());

// let Alice={
// email:"ali@gmail.com",
// gender:"female",
// username:"Alice",
// login: function(){
//     return this.username + " has logged in";
//     },
//     logout:function(){
//         return this.username + " has logged out";
//     },
// }
// console.log(Alice.login());
// console.log(Alice.logout());

// //no.1
// let phone={
//     color:"brown",
//     size:6.1,
//     type:"iPhone",
//     takePicture: function(){
//         return this.type + " took a picture";
//     },
//     playMusic: function(){
//         return this.type + " played my sounds";
//     },
//     ring: function(){
//         return this.type + " rings for 5 minutes each fall";
//     },
// }
// console.log(phone.takePicture());
// console.log(phone.playMusic());
// console.log(phone.ring());

function createPhone (color,size,type){
    return{
        color:color,
        size:size,
        type:type,
    
    takePicture: function(){
        return this.type + " took a picture";
    },
    playMusic: function(){
        return this.type + " played my sounds";
    },
    ring: function(){
        return this.type + " rings for 5 minutes each fall";
    },
}}
let preamPhone = createPhone("black","small","12GB")
console.log(preamPhone);

//no.1 Create a function to create a user object 
//no.2 Create three users using the function
//no.3 Logout the properties of each user object
//no.4 Call the methods of each user object

function createBed(size,type,grade,model){
    return{
        size:size,
        type:type,
        grade:grade,
        model:model,
        notWanted  :function(){
            return(`${this.type} I don't want`);
        },
        wanted: function(){
            return this.grade + " I like it";
                    },
                    buy: function(){
                        return this.model + "bring that one";
                    },

    }}
    let dottie = createBed("12m","castle","1stclass","new")
let modernL = createBed("12m","spongy","2ndclass","current");
let piper = createBed("3m","rolling","3rdclass","old")
console.log(dottie.notWanted());
console.log(modernL.wanted());
console.log(piper.buy());
console.log("lastLine:",modernL.type,modernL.grade,modernL.size,modernL.model)
console.log(dottie.size,dottie.type,dottie.grade,dottie.model)
console.log(piper.size,piper.type,piper.grade,piper.model)





//1.Declaration functions
//Calculating transport fee:

function calculateTransportFee (totalPrice){
    return totalPrice * 0.05;
}
console.log(calculateTransportFee(10000));



//2.Expression function.
//If stock is available

const stockisAvailable = function (quantity){
  return quantity > 0;
};
console.log(stockisAvailable(20));

//3.Anonymous Function
//Used as a callback when updating stock:

setTimeout(function(){
  console.log("stock updated successfully.")
}, 1000);

//4.Arrow function
//Displaying sales agent name:

const showAgent = (agentName) => {
  console.log("Sales Agent:",agentName);
};
showAgent("Joseline");

//5.Function without Parameters and Return
//logs report message:

function printSalesReportMessage(){
  console.log("Generating sales report");
}
printSalesReportMessage();


//6.Function Returning a value ,
// Calculating total price of a sale:

function calculateTotal(quantity , price){
  return quantity * price;
}
let total = calculateTotal(4, 140000);
console.log("Total:",total);

//7.Function with Parameters,
//  creating a receipt:

function generateReceipt(customerName, product, quantity, price, paymentType) {
  console.log(`Receipt for ${customerName}:
  Product: ${product}
  Quantity: ${quantity}
  Total: ${quantity * price}
  Payment: ${paymentType}`);
}

generateReceipt("Lynn", "Dining Table", 4, 200000, "cheque");

//Arrow Function with Unlimited Parameters, 
//Listing products sold in one transaction:

const listProducts = (...products) => {
  console.log("Products Sold:");
  products.forEach(product => console.log(product));
};
listProducts("Drawer", "Chair", "cupboard");

//Self-Invoking Function,
//Used for initializing the app:
(function (){
  console.log("MWF System Initialized");
})();


//Scope Functions
//Understanding local vs global

let companyName = "MWF";

function showCompany(){
  let message = "Welcome to " + companyName;
  console.log(message);
}
showCompany();
//console.log(message); //Error is not defined (scope)