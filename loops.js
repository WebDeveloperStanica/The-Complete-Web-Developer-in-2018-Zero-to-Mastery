//array
var toDoList = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

//For loop(the most common one)
//calling the arrays with the for loop
for (var i=0; i < toDoList.length; i++) {
       console.log(toDoList[i] + "!");   
}

//array2
var toDoList2 = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

//calling the arrays with the for loop
for (var i=0; i < toDoList2.length; i++) {
       toDoList2[i]  = toDoList2[i] + "!";
}

//While loop increasing
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

//While loop decreasing
var counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne--;
}

//do while loop(will runs ones at the "do" loop and then will check the condition of "while" loop and if is true will run, if not, not)
var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);

//forEach loop(new in Ecma script)
var todos = [
    "fa curat",
    "spala-ti dintii",
    "exercitii",
    "studiaza javascript",
    "mananca sanatos"
];
var todos2 = [
    "Nu fa curat",
    "Nu-ti spala-ti dintii",
    "Nu exercitii",
    "Nu studiaza javascript",
    "Nu mananca sanatos"
];
var todosLength = todos.length;

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
todos2.forEach(logTodos);