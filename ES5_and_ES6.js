//ES5 & ES6 = ECMA international, ECMASccipt-JavaScript

//the new let and const variables
//let- the value of let can be changed
//const - the value of const will not change, stays constant
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
}

//object, you can't change the object, but you can change the proprieties or methods of the objetc
const obj = {
    player: 'Bobby',
    experience: 100,
    wizardLevel = false
}

//call object and its propreties and methods 
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
//call object and its prop and methods in new way
const {player,experience} = obj;
let {wizardLevel} = obj

const name = 'John Snow';

//object with arrays 
const obj = {
    [name]: 'hello',
    [1+2]: 'hihi'
}

//template strings
const name = "Sally";
const age = 34;
const pet = "horse";

//accesing in old way
//const greeting = "Hello " + name + " you seem to be doing " + greeting + " !"
//accesing the variables in the new way
const greeting = `Hello ${name} you seem to be ${age-10}, What a lovely ${pet} you have`;   

//default arguments
function greet(name='', age=30, pet='cat') {
     return `Hello ${name} you seem to be ${age-10}, What a lovely ${pet} you have`;

}

//arrow functions
//old style
function add(a,b) {
    return a + b;
}
//new style
const add2 = (a,b) => {
    return a + b;
}
//or
const add3 = (a,b) => a + b;