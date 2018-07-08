var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    console.log("click!!!");
})

var buttonInput = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

buttonInput.addEventListener("click", function() {
    if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
})