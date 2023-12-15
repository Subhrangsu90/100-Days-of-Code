// 1. Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b;
}
isLess(10, 15);

// 2. Return Early Pattern for Functions
// Setup
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2)); // Should return a number
console.log(abTest(2, 2)); // Should return 8
console.log(abTest(-2, 2)); // Should return undefined
console.log(abTest(2, -2)); // Should return undefined
console.log(abTest(2, 8)); // Should return 18
console.log(abTest(3, 3)); // Should return 12
console.log(abTest(0, 0)); // Should return 0

// 3. Counting Cards
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      // Do nothing, no change in count for 7, 8, and 9
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  return count > 0 ? count + " Bet" : count + " Hold";
}
console.log(cc(2)); // Should return "1 Bet"
console.log(cc(3)); // Should return "2 Bet"
console.log(cc(7)); // Should return "2 Bet"
console.log(cc("K")); // Should return "1 Bet"
console.log(cc("A")); // Should return "0 Hold"

// 4. Build JavaScript Objects
const myDog = {
  name: "Buddy",
  legs: 4,
  tails: 1,
  friends: ["Fido", "Rover"],
};
console.log(myDog.name); // Should output a string
console.log(myDog.legs); // Should output a number
console.log(myDog.tails); // Should output a number
console.log(myDog.friends); // Should output an array
console.log(Object.keys(myDog).length === 4); // Should output true

// 5. Accessing Object Properties with Dot Notation
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// 6. Accessing Object Properties with Bracket Notation
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
const entreeValue = testObj1["an entree"];
const drinkValue = testObj1["the drink"];

// 7. Accessing Object Properties with Variables
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
const playerNumber = 16;
const player = testObj2[playerNumber];

// 8. Updating Object Properties
const myDog1 = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog1["name"] = "Happy Coder";

// 9. Add New Properties to a JavaScript Object
const myDog2 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog2.bark = "woof";

// 10. Delete Properties from a JavaScript Object
const myDog3 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
delete myDog3.tails;

// 11. Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}
phoneticLookup("charlie");

// 12. Testing Objects for Properties
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")); // Should output "pony"
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet")); // Should output "kitten"
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house")); // Should output "Not Found"
console.log(checkObj({ city: "Seattle" }, "city")); // Should output "Seattle"
console.log(checkObj({ city: "Seattle" }, "district")); // Should output "Not Found"
console.log(checkObj({ pet: "kitten", bed: "sleigh" }, "gift")); // Should output "Not Found"

// 13. Manipulating Complex Objects
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    formats: ["CD", "LP"],
  },
];
console.log(Array.isArray(myMusic)); // Should be true
console.log(myMusic.length >= 2); // Should be true
console.log(myMusic.every((item) => typeof item === "object")); // Should be true
console.log(myMusic.every((item) => Object.keys(item).length >= 4)); // Should be true
console.log(myMusic.every((item) => typeof item.artist === "string")); // Should be true
console.log(myMusic.every((item) => typeof item.title === "string")); // Should be true
console.log(myMusic.every((item) => typeof item.release_year === "number")); // Should be true
console.log(myMusic.every((item) => Array.isArray(item.formats))); // Should be true
console.log(myMusic.every((item) => item.formats.length >= 2)); // Should be true
console.log(
  myMusic.every((item) =>
    item.formats.every((format) => typeof format === "string")
  )
); // Should be true

// 14. Accessing Nested Objects
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); // Should output "maps"
