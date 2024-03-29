"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`shit happens`);
// lesson no 1 the values can be changed but not the types 
//typescript infers the type of a variable based on the initial value you assign to it
let age = 30; // ignore this errors
let isLearning = true;
// age = "michael";//brings an error:Type 'string' is not assignable to type 'number'
// isLearning = "yes"; // gives error:Type 'string' is not assignable to type 'boolean'.
isLearning = false; //gives no error
age = 20; //gives no errors
// you can also initially declare what type of value you want to assign to the variable
const circ = (diameter) => {
    return diameter * Math.PI;
};
// console.log(circ(`hello`)) // gives error:Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(circ(8.4));
// arrays and objects
// ARRAYS
let names = ["wahala", "local", "stuff"]; //type of the value and vatriable is automatically fixed
names.push(`michael`); //no errors
// names.push(23)//give error:Argument of type 'number' is not assignable to parameter of type 'string'. based on the type inference
console.log(names);
let num = [1, 3, 4, 6];
num.push(21); //no err
// num.push(`wahala`)//gives error :Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(num);
//Declaring mixed array
let numMixedStr = [12, `mike`, 3, 5];
numMixedStr.push(`lion`); //no error
numMixedStr.push(404); //no error
console.log(numMixedStr);
// OBJECTS
let issues = {
    name: `tochi`,
    problem: `annoying as fuck`,
    age: 25
};
// note you can't add extra properties to the object but you can override the object with a new object of the same properties structures
console.log(issues);
// PRE-INITIALIZING EXPLICIT TYPES so you cannot change the types along the line
let char; // string
let price; // number
let isLoggedIn; // boolean
char = `problem`;
price = 4000;
isLoggedIn: false;
// ARRAY
let nun;
// nun.push(`treasure`) // but push method doesn't unless you assigned it to an array// error:Variable 'nun' is used before being assigned.
nun = [`patricia`, `gloria`]; //either this
console.log(nun);
let numb = []; // or this
numb.push(`eva`); //this works
console.log(numb);
// MIXED ARRAY(union type array variable)
let mixed = []; //string or numbers are allowed to be pushed to this array
mixed.push(19);
mixed.push(`numbers`);
// mixed.push(false)//TSerror: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
console.log(mixed);
// union type single variable
let uid;
uid = `abc`;
uid = 123; //no TSerrors
// OBJECT
let ninjaOne; //ninjaOne becomes an object but since an array is a form of an object it is not static enough
ninjaOne = { name: `smiles`, age: `25` };
// but for the sake of specificity
let ninjaTwo; //these properties are strict cos you can't add extra properties
ninjaTwo = { name: `mike`, age: 30, fightStyle: `kungfu` };
// DYNAMIC[ANY] TYPES
let listnumber; // then you can assign it to any data types
let mixedArr = []; //making mixedArr array accept values of any datatypes
let mixedObj;
// command line code to initialize tsconfig file `tsc -- init`
const hopeItWorks = true;
const logdetail = (user) => {
    console.log(`${user.name} that has ${user.uid} says hello`);
};
const logDataDetails = (user) => {
    console.log(`${user.name} that has ${user.uid} says hello`);
};
logDataDetails({ name: `michael`, uid: 234 });
// FUNCTION SIGNATURE
let sayHello; //the f must be capitalized
sayHello = () => {
    console.log(`hello`);
};
let sayhi;
sayhi = (name, sur) => {
    console.log(`hello ${name}${sur}`);
};
sayhi(`code`, `smiles`);
//the whole project should retun void
let calculator;
calculator = (x, y, multiple) => {
    if (multiple === `add`) {
        return x + y;
    }
    else if (multiple === `sub`) {
        return x - y;
    }
    else {
        return `unable to calculate`;
    }
};
console.log(calculator(2, 4, `add`));
// classes
const invoice_1 = require("./classes/invoice"); // module exporting
// instanciate a class
const instOne = new invoice_1.Invoice("michael", "work on dpetworld website", 25000);
const instTwo = new invoice_1.Invoice("Simi", "work on shoptacle website", 50000);
console.log(instOne, instTwo);
// ina situation where you want a particular array to accept only data that has been created with the invoice class instead of this let invouces:string[] =[];
// you can allow
let invoices = [];
invoices.push(instOne); //this is only allowed because the invoice class is a type of array
// with objects
const me = {
    name: "mike",
    age: 24,
    speak(word) {
        console.log(word);
    },
    spend(cash) {
        return cash;
    }
};
console.log(me.age);
const payment_1 = require("./classes/payment");
let docOne;
let docTwo;
docOne = new invoice_1.Invoice("michael", "dog food", 850);
docTwo = new payment_1.Payment("customer", "dogfood", 1000);
console.log(docOne, docTwo);
// generics
