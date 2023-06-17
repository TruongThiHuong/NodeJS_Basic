class Person {
    id: number;
    protected firstName: string;
    protected lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    idNV: number;

    constructor(idNV: number, id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName)

        this.idNV = idNV;
    }
}

let huong = new Person(1, "Trương", "Hường");
console.log(huong.getName());