let array = [1, 2, 3, 4, 5];
let colorArray = ["red", "green", "blue"];

// 1. Use a forEach loop to print each element to the console.
array.forEach(function(element) {
    console.log(element);
});

console.log("");

// 2. Use a forEach loop to add "Color:" before each element and print them.
colorArray.forEach(function(color) {
    console.log("Color: " + color);
});

console.log("");

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
// 3. Use a forEach loop to calculate and print the sum.
numbers.forEach(function(number) {
    sum += number;
});
console.log("Sum:", sum);

console.log("");

let fruits = ["apple", "banana", "cherry"];
// 4. Use a forEach loop to print each fruit.
fruits.forEach(function(fruit) {
    console.log(fruit);
});

console.log("");

let names = ["Simba", "Scar", "Nala", "Mufasa", "Zazu"];
// 5. Use a forEach loop to print each name with its index.
names.forEach(function(name, index) {
    console.log(name + " (Index: " + index + ")");
});
