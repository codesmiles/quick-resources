console.log(`shit happens`);

// lesson no 1 the values can be changed but not the types 
//typescript infers the type of a variable based on the initial value you assign to it
let age = 30; // ignore this errors
let isLearning = true;

// age = "michael";//brings an error:Type 'string' is not assignable to type 'number'
// isLearning = "yes"; // gives error:Type 'string' is not assignable to type 'boolean'.
isLearning = false;//gives no error
age = 20//gives no errors

// you can also initially declare what type of value you want to assign to the variable
const circ = (diameter: number) => { // defining the type in a function stating the parameter must be a number
    return diameter * Math.PI;
}
// console.log(circ(`hello`)) // gives error:Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(circ(8.4));

// arrays and objects
// ARRAYS
let names = ["wahala", "local", "stuff"]; //type of the value and vatriable is automatically fixed
names.push(`michael`);//no errors
// names.push(23)//give error:Argument of type 'number' is not assignable to parameter of type 'string'. based on the type inference
console.log(names);

let num = [1, 3, 4, 6]
num.push(21)//no err
// num.push(`wahala`)//gives error :Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(num)

//Declaring mixed array
let numMixedStr = [12, `mike`, 3, 5];
numMixedStr.push(`lion`);//no error
numMixedStr.push(404);//no error
console.log(numMixedStr)

// OBJECTS
let issues = {//the type of the object and property sticked
    name: `tochi`,
    problem: `annoying as fuck`,
    age: 25
}
// note you can't add extra properties to the object but you can override the object with a new object of the same properties structures
console.log(issues)


// PRE-INITIALIZING EXPLICIT TYPES so you cannot change the types along the line
let char: string;// string
let price: number;// number
let isLoggedIn: boolean;// boolean

char = `problem`;
price = 4000;
isLoggedIn: false;

// ARRAY
let nun: string[];
// nun.push(`treasure`) // but push method doesn't unless you assigned it to an array// error:Variable 'nun' is used before being assigned.
nun = [`patricia`, `gloria`] //either this
console.log(nun)

let numb: string[] = [];// or this
numb.push(`eva`); //this works
console.log(numb);

// MIXED ARRAY(union type array variable)
let mixed: (string | number)[] = []; //string or numbers are allowed to be pushed to this array
mixed.push(19);
mixed.push(`numbers`);
// mixed.push(false)//TSerror: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
console.log(mixed)

// union type single variable
let uid: string | number

uid = `abc`;
uid = 123; //no TSerrors

// OBJECT
let ninjaOne: object;//ninjaOne becomes an object but since an array is a form of an object it is not static enough
ninjaOne = { name: `smiles`, age: `25` };
// but for the sake of specificity
let ninjaTwo: {
    name: string,
    age: number,
    fightStyle: string
} //these properties are strict cos you can't add extra properties
ninjaTwo = { name: `mike`, age: 30, fightStyle: `kungfu` }

// DYNAMIC[ANY] TYPES
let listnumber: any; // then you can assign it to any data types
let mixedArr: any[] = [];//making mixedArr array accept values of any datatypes
let mixedObj: { name: any, age: any }

// command line code to initialize tsconfig file `tsc -- init`
const hopeItWorks: boolean = true;
// hopeItWorks = true;



// TYPE ALIASES:ways to avoid type specifications
type mikeId = string | number;
type userData = { name: string, uid: number };

const logdetail = (user: { name: string, uid: mikeId }) => {
    console.log(`${user.name} that has ${user.uid} says hello`)
}

const logDataDetails = (user: userData) => {
    console.log(`${user.name} that has ${user.uid} says hello`)
}
logDataDetails({ name: `michael`, uid: 234 })

// FUNCTION SIGNATURE
let sayHello: Function; //the f must be capitalized
sayHello = () => {
    console.log(`hello`)
}

let sayhi: (a: string, b: string) => void

sayhi = (name: string, sur: string) => {
    console.log(`hello ${name}${sur}`);
}

sayhi(`code`, `smiles`)
//the whole project should retun void

let calculator: (x: number, y: number, multiple: string) => number | string;

calculator = (x: number, y: number, multiple: string) => {
    if (multiple === `add`) { return x + y }
    else if (multiple === `sub`) { return x - y }
    else { return `unable to calculate`; }
}

console.log(calculator(2, 4, `add`))