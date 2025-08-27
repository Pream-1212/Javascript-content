// 1. Arrow Functions and this Binding
// Explanation:

// Arrow functions provide a shorter syntax for writing functions.

// Unlike regular functions, arrow functions do not have their own this.

// Instead, they inherit this from their surrounding scope (lexical scoping).

// This makes them very useful when working inside objects or classes.

Example:
// Regular function
function greet() {
  console.log("Hello " + this.name);
}

const person1 = { name: "Desire", greet };
person1.greet(); // "Hello Desire"

// Arrow function with lexical this
const person2 = {
  name: "Desire",
  greet: () => {
    console.log("Hello " + this.name);
  }
};
person2.greet(); // "Hello undefined" (because arrow function does not bind its own this)


// 👉 So if you need this to refer to the object, use a regular function. If you want to avoid rebinding this (like inside callbacks), use an arrow function.

// 2. Template Literals
// Explanation:

// Introduced in ES6, template literals use backticks (` `).

// They allow string interpolation (inserting variables directly in strings using ${}).

// They also support multi-line strings without \n.

// Example:
// const name = "Desire";
// const language = "JavaScript";

// Traditional way
console.log("Hello " + name + ", welcome to " + language + "!");

// Template literal way
console.log(`Hello ${name}, welcome to ${language}!`);

// Multi-line string
const message = `
Dear ${name},
You are learning ES6 features.
Keep coding! 🚀
`;
console.log(message);

// 3. Default Parameters
// Explanation:

// In ES6, you can assign default values to function parameters.

// This avoids the need to check if an argument is undefined.

// Example:
// Without default parameters
function greet(name) {
  name = name || "Guest";
  console.log(`Hello ${name}`);
}
greet(); // "Hello Guest"
greet("Desire"); // "Hello Desire"

// With default parameters (ES6)
function greet2(name = "Guest") {
  console.log(`Hello ${name}`);
}
greet2(); // "Hello Guest"
greet2("Desire"); // "Hello Desire"

// 4. ES6 Classes vs ES5 Constructor Functions
// Explanation:

// Before ES6, JavaScript used constructor functions and prototype to create objects.

// ES6 introduced classes, which are syntactic sugar over constructor functions (they make the code more readable and organized).

// Example (ES5 Constructor Function):
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person4 = new Person("Desire", 23);
person1.greet();

//Example (ES6 Class):
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person3 = new Person("Desire", 23);
person2.greet();


// 👉 Both work the same way, but classes are cleaner and more intuitive.

// 🎯 Exercise for You

// Create a class called Car using ES6 syntax with:

// constructor(brand, model, year)

// a method getInfo() that returns a string using template literals, e.g.:

// Toyota Corolla (2020)


// Add a method start() that logs "The car is starting...".

// Add a default parameter year = 2024 if not provided.

// Create an instance of Car and test all methods.