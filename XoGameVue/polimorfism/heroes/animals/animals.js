class animal {
    constructor(name) {
        this.name = name;
    }
    speak() {

    };
}

class Cat extends animal {
    speak() {
        console.log('Miau!');
    }
}

class Dog extends animal {
    speak() {
        console.log('Ham!');
    }
}

class Duck extends animal {
    speak() {
        console.log('Mac!');
    }
}

let felix = new Cat('Felix');
let astor = new Dog('Astor');
let lessie = new Dog('Lessie');
let donald = new Duck('Donald');


felix.speak();
astor.speak();
lessie.speak();
donald.speak();