console.log(`shit happens`);

// lesson no 1 the values can be changed but not the types 
//typescript infers the type of a variable based on the initial value you assign to it
let age = 30; // ignore this errors
let isLearning = true;

age = "michael";//brings an error:Type 'string' is not assignable to type 'number'
isLearning = "yes"; // give error:Type 'string' is not assignable to type 'boolean'.
isLearning = false;//gives no error
age = 20//gives no errors

// you can also initially declare what type of value you want to assign to the variable
const circ = (diameter: number)=>{ // defining the type in a function stating the parameter must be a number
    return diameter*Math.PI;
}
// console.log(circ(`hello`)) // gives an error:Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(circ(8.4));

// arrays and objects
let names =["wahala","local","stuff"];
names.push(`michael`);//no errors
names.push(23)//will give:Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);

let num = [1,3,4,6]