// 1. Use Destructuring Assignment to Assign Variables from Arrays
let a = 8,
  b = 6;
// Swap values using array destructuring
[a, b] = [b, a];
console.log("The value of a after swapping: ", a); // Should be 6
console.log("The value of b after swapping: ", b); // Should be 8

// 2. Destructuring via rest elements
function removeFirstTwo(list) {
  const [a, b, ...rest] = list;
  return rest;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);

// 3. Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};
// Use destructuring in the function parameter
const half = ({ max, min }) => (max + min) / 2.0;
console.log(half(stats)); // Should be 28.015

// 4. Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];
  // Use a for...of loop to iterate over the array
  for (const item of arr) {
    // Use template literal syntax to create the li element string
    const liElement = `<li class="text-warning">${item}</li>`;
    failureItems.push(liElement);
  }

  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

// 5. Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Use object property shorthand
  return { name, age, gender };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

// 6. Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear); // Should output 3

// 7. Use class Syntax to Define a Constructor Function
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

// 8. Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit) {
    this._temperature = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this._temperature - 32);
  }
  set temperature(celsius) {
    this._temperature = (celsius * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
