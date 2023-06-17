import { type } from "os";

const a: number = 10;
const b: number = 20;

console.log("a + b =", a + b);

//Array
const array: string[] = ["hhs"];

//Mix Array
let arr: (number | string)[] = ["Hường", 18];

//Tuple
let arr2: [string, number] = ["Hường", 18];
let arr3: [string, number?] = ["Hường"];

console.log(">>> array = ", arr2);

//Enum
enum API_STATUS {
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"
}

let a1 = API_STATUS.PENDING;
let a2 = API_STATUS.FULFILLED;
console.log(">>> a1 = ", a1);
console.log(">>> a2 = ", a2);

//Any
let c: any = "Hường";
c = 18;

//void
const d = (a: number, b: number): number => {
    return a + b;
}

const e = (message: String): void => {
    console.log(">>> message: ", message);
}

//Nerver
function handleException(errorMessage: string): never {
    throw Error(errorMessage);
}

//Union
//The entered any data type and run the program
function addNumberOrString(a: any, b: any) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    throw new Error("Paramater must be numbers or strings");
}

//Check the entered data type first and then run the program
function addNumberOrStringNew(a: (number | string), b: (number | string)) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    throw new Error("Paramater must be numbers or strings");
}

//Type Aliases
type typeAB = number | string;
function addNumberOrStringNew1(a: typeAB, b: typeAB) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    throw new Error("Paramater must be numbers or strings");
}

// console.log(">>> result = ", addNumberOrString(true, "Hường"));
// console.log(">>> result = ", addNumberOrStringNew("Trương", "Hường"));

//if - else
const age: number = 13;
if (age > 18) {
    console.log("You ưas big")
}
else {
    console.log("You are still a child")
}

//For loop
//Function
function Sum(a: number, b: number) {
    return a + b;
}

const sum2 = (a: number, b: number): never => {
    throw console.log(a + b);
}
console.log(sum2);

//Function optional parameters
function sum3(x: number, y: number, z?: number): number {
    console.log(">>> z = ", z);
    if (z) {
        return x + y + z;
    }
    return x + y;
}
console.log(">>> sum3 = ", sum3(1, 2));

//default parameters
function sum4(x: number, y: number, z: number = 0): number {
    console.log(">>> z = ", z);
    if (z) {
        return x + y + z;
    }
    return x + y;
}
console.log(">>> sum3 = ", sum4(1, 2), sum4(1, 2, 3));

//Rest parameters => ... always put last
function restTest(...integer: number[]): number {
    let total = 0;
    integer.forEach((num) => {
        total += num;
    });
    return total;
}
console.log(restTest());
console.log(restTest(10, 20));
console.log(restTest(10, 20, 30));

function test(n: number, ...array: number[]): number[] {
    //map => return new array
    return array.map((x) => x * n);
}
console.log(">>> result = ", test(10, 1, 2, 3, 4, 5));

function sayHello(text: string, ...array: string[]): string {
    return text + " " + array.join(", ") + "!";
}
console.log(">>> Welcomes to: ", sayHello("Hello", "Hường", "Yến", "Mai"));