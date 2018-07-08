
//arrays with string
var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);
//arrays with numbers
var numbers = [1,2,3,4,5];
//arrays with booleans
var booleans = [true, false, true];
//arrays with functions
var functionList = [function apple() {
    console.log("apple");
}];
//or you can have a mix of types in arrays...but is not really advised...
//var mixedList = ["apple", 3, undefined, true, function apple( {
    console.log(mixedList);
//})];

//arrays in arrays
//var listTwo = [
 //   ["lion", "monkey", "dog"]
//];
//console.log(listTwo[0][0]);

//methods or function we can use on arrays
list.shift();
list.pop();
console.log(list.push("elephant"));
list.concat(["bee", "deer"]);
list.sort();