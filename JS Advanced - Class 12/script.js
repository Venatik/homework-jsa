class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    eat(input) {
        if (input instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`);
            } else if (input.size > this.size * 2) {
                console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large.`);
            } else {
                input.isEaten = true;
                console.log(`The animal ${this.name} ate the ${input.name}.`);
            }
        }
    }
}

let elephant = new Animal("Elephant", "herbivore", 10, 5000);
let gazele = new Animal("Gazele", "herbivore", 5, 50);
let tiger = new Animal("Tiger", "carnivore", 5, 200);
let lion = new Animal("Lion", "carnivore", 7, 250);

console.log(gazele); // isEaten = false

elephant.eat(gazele);
lion.eat(gazele);
tiger.eat(gazele);
tiger.eat(elephant); // too large

console.log(gazele); // isEaten = true