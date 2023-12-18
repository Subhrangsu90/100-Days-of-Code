// 1. Profile Lookup
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i][prop] !== undefined) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
console.log(lookUpProfile("Akira", "likes")); // Should return ["Pizza", "Coding", "Brownie Points"]
console.log(lookUpProfile("Sherlock", "likes")); // Should return ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes")); // Should return an array
console.log(lookUpProfile("Bob", "number")); // Should return "No such contact"
console.log(lookUpProfile("Bob", "potato")); // Should return "No such contact"
console.log(lookUpProfile("Akira", "address")); // Should return "No such property"

// 2. Generate Random Fractions with JavaScript
function randomFraction() {
  return Math.random();
}

// 3. Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// 4. Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// 5. Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");
//  6. Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

// 7. Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

// 8. Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
checkSign(10);

// 9. Use Recursion to Create a Countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(-1)); // Should return []
console.log(countdown(10)); // Should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(countdown(5)); // Should return [5, 4, 3, 2, 1]

// 10. Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
}
console.log(rangeOfNumbers(1, 5)); // Should return [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(6, 9)); // Should return [6, 7, 8, 9]
console.log(rangeOfNumbers(4, 4)); // Should return [4]
