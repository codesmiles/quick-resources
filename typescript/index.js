console.log("shit happens");
// lesson no 1 the values can be changed but not the types 
//typescript infers the type of a variable based on the initial value you assign to it
var age = 30; // ignore this errors
var isLearning = true;
age = "michael"; //brings an error:Type 'string' is not assignable to type 'number'
isLearning = "yes"; // give error:Type 'string' is not assignable to type 'boolean'.
isLearning = false; //gives no error
age = 20; //gives no errors
// you can also initially declare what type of value you want to assign to the variable
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ(`hello`)) // gives an error:Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(circ(8.4));
// arrays and objects
var names = ["wahala", "local", "stuff"];
names.push("michael"); //no errors
names.push(23); //will give:Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);
var num = [1, 3, 4, 6];
