console.log("shit happens");
// lesson no 1 the values can be changed but not the types 
//typescript infers the type of a variable based on the initial value you assign to it
var age = 30; // ignore this errors
var isLearning = true;
age = "michael"; //brings an error:Type 'string' is not assignable to type 'number'
isLearning = "yes"; // gives error:Type 'string' is not assignable to type 'boolean'.
isLearning = false; //gives no error
age = 20; //gives no errors
// you can also initially declare what type of value you want to assign to the variable
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ(`hello`)) // gives error:Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(circ(8.4));
// arrays and objects
// ARRAYS
var names = ["wahala", "local", "stuff"]; //type of the value and vatriable is automatically fixed
names.push("michael"); //no errors
names.push(23); //give error:Argument of type 'number' is not assignable to parameter of type 'string'. based on the type inference
console.log(names);
var num = [1, 3, 4, 6];
num.push(21); //no err
num.push("wahala"); //gives error :Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(num);
//Declaring mixed array
var numMixedStr = [12, "mike", 3, 5];
numMixedStr.push("lion"); //no error
numMixedStr.push(404); //no error
console.log(numMixedStr);
// OBJECTS
var issues = {
    name: "tochi",
    problem: "annoying as fuck",
    age: 25
};
// note you can't add extra properties to the object but you can override the object with a new object of the same properties structures
console.log(issues);
// PRE-INITIALIZING EXPLICIT TYPES so you cannot change the types along the line
var char; // string
var price; // number
var isLoggedIn; // boolean
char = "problem";
price = 4000;
isLoggedIn: false;
// ARRAY
var nun;
// nun.push(`treasure`) // but push method doesn't unless you assigned it to an array// error:Variable 'nun' is used before being assigned.
nun = ["patricia", "gloria"]; //either this
console.log(nun);
var numb = []; // or this
numb.push("eva"); //this works
console.log(numb);
// MIXED ARRAY(union type array variable)
var mixed = []; //string or numbers are allowed to be pushed to this array
mixed.push(19);
mixed.push("numbers");
mixed.push(false); //TSerror: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
console.log(mixed);
// union type single variable
var uid;
uid = "abc";
uid = 123; //no TSerrors
// OBJECT
var ninjaOne; //ninjaOne becomes an object but since an array is a form of an object it is not static enough
ninjaOne = { name: "smiles", age: "25" };
// but for the sake of specificity
var ninjaTwo; //these properties are strict cos you can't add extra properties
ninjaTwo = { name: "mike", age: 30, fightStyle: "kungfu" };
// DYNAMIC[ANY] TYPES
var listnumber; // then you can assign it to any data types
var mixedArr = []; //making mixedArr array accept values of any datatypes
var mixedObj;
