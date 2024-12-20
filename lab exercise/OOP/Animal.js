// Basic Animal class
class Animal {
    #name;  // Encapsulation: Making the name attribute private
    constructor(name) {
        this.#name = name;
    }

    // Encapsulation: Providing a public method to access the private name
    getName() {
        return this.#name;
    }

    // Polymorphism: Different animals implement different movement behaviors
    move() {
        console.log(`${this.getName()} is moving!`);
    }
}

// Inheritance: Fish class extends Animal and overrides the move method
class Fish extends Animal {
    constructor(name) {
        super(name);  // Calling the parent class's constructor
    }

    move() {
        console.log(`${this.getName()} is swimming!`);  // Overriding the move method
    }
}

// Inheritance: Bird class extends Animal and overrides the move method
class Bird extends Animal {
    constructor(name) {
        super(name);  // Calling the parent class's constructor
    }

    move() {
        console.log(`${this.getName()} is flying!`);  // Overriding the move method
    }
}

// Static Method: A method to demonstrate the behavior of a zoo
class Zoo {
    static open() {
        console.log("The zoo is now open!");
    }
}

// Creating instances of Fish and Bird classes
let nemo = new Fish("Nemo");
let tweety = new Bird("Tweety");

// Calling their move methods to demonstrate polymorphism
nemo.move();   // Output: Nemo is swimming!
tweety.move(); // Output: Tweety is flying!

// Using the static method to open the zoo
Zoo.open();    // Output: The zoo is now open!
