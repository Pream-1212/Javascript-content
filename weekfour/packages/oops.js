//Advanced OOP (Object-Oriented Programming) principles in JavaScript with examples:
//1. Inheritance

//Definition:
//Inheritance allows a class to reuse properties and methods from another class.

//Example in JavaScript (ES6 classes):
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class inherits from Animal
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.

//Here, Dog inherits from Animal but can override methods.

// 2. Polymorphism

// Definition:
// Polymorphism means one interface, multiple behaviors — same method can behave differently depending on the object.

// Example:
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const animals = [new Dog("Buddy"), new Cat("Kitty")];

animals.forEach((animal) => animal.speak());
// Output:
// Buddy barks.
// Kitty meows.
//The same method speak() behaves differently for Dog and Cat.

// 3. Abstraction

// Definition:
// Abstraction hides complex details and exposes only what’s necessary. In JavaScript, we often use methods in classes or factory functions to abstract complexity.

// Example:
class Vehicle {
  constructor(type) {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot instantiate abstract class Vehicle directly");
    }
    this.type = type;
  }
  start() {
    console.log(`${this.type} is starting`);
  }
}

class Car extends Vehicle {
  constructor(model) {
    super("Car");
    this.model = model;
  }


start() {
    // Overriding the start method
    console.log(`${this.model} is starting`);
  }
}

const myCar = new Car("Toyota");
myCar.start(); // Car is starting
//Users don’t need to know the internal details of Vehicle.





//  Real-world OOP examples in JavaScript

// UI Components (like buttons, modals, forms)

// Each component is a class with properties and methods.

// Game development

// Characters, enemies, and items can be classes inheriting from a base class GameObject.

// E-commerce apps

// Product, CartItem, Order classes can use inheritance and polymorphism to handle different product types.

// Real-world OOP examples (clean list)

// UI Components → Button, Modal, Form classes all inherit from a Component base class.

// Game Development → Player, Enemy, Item inherit from GameObject.

// E-commerce App → Product, CartItem, Order can use inheritance + polymorphism.

// visual text diagram

// OOP in a Zoo Example
//            [ Abstract Class ]
//                  Animal
//          ------------------------
//          - name
//          - age
//          + speak()   // abstract
//          ------------------------

//        | Inheritance
//        v
//    ------------------      ------------------      ------------------
//    |      Lion       |     |    Elephant     |     |     Parrot      |
//    ------------------      ------------------      ------------------
//    + speak() : Roar        + speak() : Trumpet     + speak() : Squawk
//    ------------------      ------------------      ------------------

//  Concepts Shown

// Abstraction → Animal is abstract, cannot be instantiated directly.

// Inheritance → Lion, Elephant, and Parrot extend Animal.

// Polymorphism → Each subclass overrides speak() differently.

//  Would you like me to also build the e-commerce version (with Product, Book, Clothes, Electronics) in the same diagram style for comparison?
//Here’s the E-commerce OOP Example in the same simple diagram style:

//  OOP in an E-commerce App
//            [ Abstract Class ]
//                  Product
//          ------------------------
//          - id
//          - name
//          - price
//          + getDetails()   // abstract
//          ------------------------

//        | Inheritance
//        v
//    --------------------   --------------------   --------------------
//    |       Book        |  |     Clothes      |  |   Electronics    |
//    --------------------   --------------------   --------------------
//    + getDetails():         + getDetails():       + getDetails():
//      "Title, Author"         "Size, Color"         "Brand, Model"
//    --------------------   --------------------   --------------------

//  Concepts Shown

// Abstraction → Product defines the shared properties and abstract method getDetails() but cannot be instantiated directly.

// Inheritance → Book, Clothes, and Electronics extend Product.

// Polymorphism → Each subclass implements getDetails() differently, depending on the type of product.



