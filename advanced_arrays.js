//Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2);
})

console.log('forEach', double);

//map, filter, reduse
//map
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);
const map = document.getElementById('map');
map.textContent = mapArray;

//filter
const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);
