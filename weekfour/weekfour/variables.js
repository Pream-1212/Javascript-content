// // CREATING VARIABLES

var name = "Praise"
var age = 18;

// ES6 Way
let name = "Praise"; //
const age = 18; //

// 2.Functions
function sayHello(Praise) {
    return "Hello" + Praise;
}


//ES6 Way -Arrow functions
const sayHello = (Praise) => {
    "Hello" + name;
};

//SHORTER WAY;
const Hello = (name) => "Hello" + name;



// ES6 Way - let and const

let name = "John";    // Can change later
const age = 25;       //cannot change later


//  2. Functions (Reusable Code Blocks)
// ES5 Way-Regular Functions

function sayHello(name) {
    return "Hello " + name;
}


//  ES6 Way - Arrow Functions

const sayHello = (Praise) => {
    return "Hello " + name;
};

// Even shorter way:
const sayHello = (Praise) => "Hello " + name;


// 3. Combining Text (Strings)

// ES5 Way - Using + to Combine

var name = "Praise";
var age = 18;
var message = "Hi, I'm " + "Praise" + " and I'm " +" 18 years old";


// ES6 Way - Template Strings

const name = "Praise";
const age = 18;
const message = `Hi, I'm ${Praise} and I'm ${ 18 } years old`;


// 4. Getting Values from Objects

//  What's an Object?
const person = {
    name: "Praise",
    age: 18,
    city: "Kampala"
};


//  ES5 Way - One by One

var name = Praise;
var age = 18;
var city = Kampala;


// ES6 Way - Destructuring 
const person1 = {
    name: "Joy",
    age: 15,
    city: "mbale"
};

// ES6 Destructuring
const { name, age, city } = person1;

console.log(name); // Joy
console.log(age);  // 15
console.log(city); // mbale



//  5. Function Parameters (Giving Information to Functions)
// ES5 Way- Manual Defaults
function greet(Praise) {
    if (!name) {
        name = "World";  // If no name given, use "World"
    }
    return "Hello " + name;
}


//ES6 Way - Built-in Defaults
function greet(name = "World") {
    return `Hello ${ name }`;
}


// // 6. Working with Lists (Arrays)
// const fruits = ["apple", "banana", "orange"];


// // ES5 Way - Copying Lists
// var fruits = ["apple", "banana"];
// var moreFruits = fruits.slice();  // Make a copy
// moreFruits.push("orange");        // Add to the copy


// // ES6 Way - Spread Operator
// const fruits = ["apple", "banana"];
// const moreFruits = [...fruits, "orange"];


// 7. Classes (Blueprints for Objects)
// ES5 Way - Constructor Functions

function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

Car.prototype.start = function () {
    return "The " + this.color + " " + this.brand + " is starting!";
};

var myCar = new Car("Toyota", "red");
// ES6 Way - Class Syntax

class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    start() {
        return` The ${ this.color } ${ this.brand } is starting!`;
    }
}

const myCar = new Car("Toyota", "red");

// Simple Real-World Example
// ES5 Version (Old Way)
// Create a list of movies
var movies = [];

// Function to add a movie
function addMovie(title, year) {
    var movie = {
        title: title,
        year: year,
        watched: false
    };
    movies.push(movie);
    return "Added: " + title;
}

// Function to mark as watched
function watchMovie(title) {
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].title === title) {
            movies[i].watched = true;
            return title + " marked as watched!";
        }
    }
}


//  ES6 Version (New Way)

// Create a list of movies
const movies = [];

// Function to add a movie
const addMovie = (title, year) => {
    const movie = { title, year, watched: false };
    movies.push(movie);
    return` Added: ${ title }`;
};

//Function to mark as watched
const watchMovie = (title) => {
    const movie = movies.find(movie => movie.title === title);
    if (movie) {
        movie.watched = true;
        return `${ title } marked as watched!`;
    }
};