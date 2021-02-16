function add(a, b){
    return a + b;
}
console.log(add(3, 5));

const subtract = function(a, b){
    return b - a;
}
console.log(subtract(2, 1));

// add them to an object and call them from that object
const obj = {};
obj.add = add;
obj.subtract = subtract;
//console.log(obj);
console.log(obj.add(2, 4));