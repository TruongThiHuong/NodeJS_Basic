class Person {
    id: number;
    protected firstName: string;
    protected lastName: string;
    private age: number;
    static test = 10;

    constructor(id: number, firstName: string, lastName: string, age: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get getAge(): number {
        return this.age;
    }

    set setAge(age: number) {
        if (age <= 0 || age > 200) {
            throw Error("Invalid Age");
        }
        this.age = age;
    }
}

//Kế thừa
class Employee extends Person {
    idNV: number;

    constructor(idNV: number, id: number, firstName: string, lastName: string, age: number) {
        super(id, firstName, lastName, age)
        this.idNV = idNV;
    }
}

//Trừu tượng => những class kế thừa phải khai báo tất cả giống với class cha
abstract class Student {
    abstract get(): number;
}

//Interfaces (Gần giống như Type) điểm khác biệt là interfaces cộng gộp 
interface IPerson {
    firstName: string;
    lastName: string;
}

function fullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}

let huong = new Person(1, "Trương", "Hường", 18);
huong.setAge = 22;
console.log(huong);
console.log("Test = ", Person.test);