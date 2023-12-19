// 1. Compare Scopes of the var and let Keywords
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();

// 2. Mutate an Array Declared with const
const s = [5, 7, 2];

function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s); // Output: [2, 5, 7]

// 3. Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99; // This will throw an error in strict mode
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI); // Output: 3.14

// 4. Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();
console.log(magic());

// 5. Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

// 6. Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));
console.log(increment(5));
console.log(increment(10));

// 7. Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
console.log(sum(0, 1, 2)); // Output: 3
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5)); // Output: 5
console.log(sum()); // Output: 0

// 8. Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
arr2 = [...arr1];
console.log(arr2);

// 9. Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today); // Output: 77
console.log(tomorrow); // Output: 80

// 10. Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES1;
console.log(highToday); // Output: 77
console.log(highTomorrow); // Output: 80

// 11. Use Destructuring Assignment to Assign Variables from Arrays
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
const {
  today: { low: lowToday, high: highToday1 },
} = LOCAL_FORECAST;
console.log(lowToday); // Output: 64
console.log(highToday1); // Output: 77
