//function declaration (with name)

function sayHello() {
    document.write("Hello");
    console.log("Hi functions");
}
sayHello();

//function expresion(anonymous function, function saved in a variable, without a name)

var sayBye = function() {
    console.log("Bye");
    document.write("Bye");
}
sayBye();

//Examples of do not repeat yourself by adding arguments
//this is a function example of repeating coding
function sing() {
    console.log("function with no arguments");
    console.log("Repeating code");
}
sing();

function sing2() {
    console.log("Nooooooooooo");
    console.log("Stooooooooop");
}
sing2();
//this is a function with arguments and is much shorter
function sing3(song) {
    console.log(song);
    
}
sing3("function with arguments");
sing3("shorter solution");

//other functions arguments with numbers (not strings) and differit ways to call the functions
function multiply(a, b) {
   return a * b;
}
//call function with variable
var result = multiply(6, 6);
document.write(result);
//a shorter way to call the function
console.log(multiply(5, 6));