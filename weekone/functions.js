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

//no.2
let Bob={
    email:"boo@gmail.com",
    gender:"male",
    username:"Bob",
    login: function(){
        return this.username + " has logged in"; 
    },
logout:function (){
    return this.username + " has logged out";
    
},
}
console.log(Bob.login());
console.log(Bob.logout());

let Alice={
email:"ali@gmail.com",
gender:"female",
username:"Alice",
login: function(){
    return this.username + " has logged in";
    },
    logout:function(){
        return this.username + " has logged out";
    },
}
console.log(Alice.login());
console.log(Alice.logout());

//no.1
let phone={
    color:"brown",
    size:6.1,
    type:"iPhone",
    takePicture: function(){
        return this.type + " took a picture";
    },
    playMusic: function(){
        return this.type + " played my sounds";
    },
    ring: function(){
        return this.type + " rings for 5 minutes each fall";
    },
}
console.log(phone.takePicture());
console.log(phone.playMusic());
console.log(phone.ring());
