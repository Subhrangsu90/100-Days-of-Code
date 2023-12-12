// Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["Subha", 8];

// Nest one Array within Another Array
const myArray1 = [
  ["Subha", 8],
  ["Subhrangsu", 9],
];

// Access Array Data with Indexes
const myArray2 = [50, 60, 70];
var myData = myArray2[0];

// Modify Array Data With Indexes
const myArray3 = [18, 64, 99];
myArray3[0] = 45;

// Access Multi-Dimensional Arrays With Indexes
const myArray4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData = myArray4[2][1];

// Manipulate Arrays With push Method
const myArray5 = [
  ["John", 23],
  ["cat", 2],
];
myArray5.push(["dog", 3]);

// Manipulate Arrays With pop Method
const myArray6 = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArray = myArray6.pop();

// Manipulate Arrays With shift Method
const myArray7 = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray1 = myArray7.shift();

// Manipulate Arrays With unshift Method
const myArray8 = [
  ["John", 23],
  ["dog", 3],
];
myArray8.shift();
myArray8.unshift(["Paul", 35]);

// Shopping List
const myList = [
  ["apple", 10],
  ["banana", 20],
  ["orange", 15],
  ["grape", 8],
  ["kiwi", 12],
];

// Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

// Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5));
console.log(timesFive(2));
console.log(timesFive(0));

// Global Scope and Functions
const myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
function myLocalScope() {
  const myVar = 5;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar); // // Uncaught ReferenceError: myVar is not defined

// Global vs. Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();
