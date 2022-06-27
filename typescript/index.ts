console.log(`shit happens`);

// lesson no 1 the values can be changed but not the types 
//typescript infers the type of a variable based on the initial value you assign to it
let age = 30; // ignore this errors
let isLearning = true;

age = "michael";//brings an error:Type 'string' is not assignable to type 'number'
isLearning = "yes"; // gives error:Type 'string' is not assignable to type 'boolean'.
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
names.push(23)//give error:Argument of type 'number' is not assignable to parameter of type 'string'. based on the type inference
console.log(names);

let num = [1, 3, 4, 6]
num.push(21)//no err
num.push(`wahala`)//gives error :Argument of type 'string' is not assignable to parameter of type 'number'.
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
isLoggedIn:false;

// ARRAY
let nun:string[];
nun = [`patricia`,`gloria`]
nun.push(`treasure`) // but push method doesn't unless you assigned it to an array
console.log(nun)

let numb:string[]=[];
numb.push(`eva`); //this works
console.log(numb);


