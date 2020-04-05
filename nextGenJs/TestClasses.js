class Human {

    constructor() {
        this.gender = 'Male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super();
        this.name = 'Deep';
    }

    printName() {
        console.log(this.name);
    }
}

const p = new Person();
p.printName();
p.printGender();