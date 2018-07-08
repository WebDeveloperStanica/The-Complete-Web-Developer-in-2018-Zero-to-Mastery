//objects (in objects we have properties-values, in arrays we have index-values)
//you can have all kind of data types in objects
var user = {
    //propeties in object user
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    //array in object user
    spells: ["abrakadabra", "shazam", "boo"],
    //function (or method) in object user
    shout: function() {
        console.log("Ahhhhhhhh!");
    }
};
//adding a propeties and values to the user object
user.favouriteFood = "spinach";
user.isMarriet = true;
//calling the second array from the spell array form object user
user.spells[1];
//calling a propety from the object
user.age;
//calling function or method "ahout" from object "user"
user.shout();

//two objects in array
var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
];

//calling the first obkect from the array list
list[0].password;

//a empty object returns "null" object, data type
//as empty variables returns "undefined" data type
