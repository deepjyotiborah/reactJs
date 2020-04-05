class Human {

    gender = 'Male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    name = 'Deep';

    printName = () => {
        console.log(this.name);
    }
}

const p = new Person();
p.printName();
p.printGender();