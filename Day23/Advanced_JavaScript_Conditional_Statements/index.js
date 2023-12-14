// Introducing Else Statements
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

// Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

// Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);
orderMyLogic(4);
orderMyLogic(6);
orderMyLogic(11);

// Chaining If Else Statements
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
testSize(7);
testSize(0);
testSize(4);
testSize(5);
testSize(8);
testSize(10);
testSize(14);
testSize(17);
testSize(20);
testSize(25);

// Golf Code
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0]; // "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return names[1]; // "Eagle"
  } else if (strokes === par - 1) {
    return names[2]; // "Birdie"
  } else if (strokes === par) {
    return names[3]; // "Par"
  } else if (strokes === par + 1) {
    return names[4]; // "Bogey"
  } else if (strokes === par + 2) {
    return names[5]; // "Double Bogey"
  } else if (strokes >= par + 3) {
    return names[6]; // "Go Home!"
  }
}

golfScore(5, 4);
console.log(golfScore(4, 1)); // "Hole-in-one!"
console.log(golfScore(4, 2)); // "Eagle"
console.log(golfScore(5, 2)); // "Eagle"
console.log(golfScore(4, 3)); // "Birdie"
console.log(golfScore(4, 4)); // "Par"
console.log(golfScore(1, 1)); // "Hole-in-one!"
console.log(golfScore(5, 5)); // "Par"
console.log(golfScore(4, 5)); // "Bogey"
console.log(golfScore(4, 6)); // "Double Bogey"
console.log(golfScore(4, 7)); // "Go Home!"
console.log(golfScore(5, 9)); // "Go Home!"

// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "Not Found";
      break;
  }
  return answer;
}

console.log(caseInSwitch(1)); // "alpha"
console.log(caseInSwitch(2)); // "beta"
console.log(caseInSwitch(3)); // "gamma"
console.log(caseInSwitch(4)); // "delta"

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
switchOfStuff(1);
console.log(switchOfStuff("a")); // "apple"
console.log(switchOfStuff("b")); // "bird"
console.log(switchOfStuff("c")); // "cat"
console.log(switchOfStuff("d")); // "stuff"
console.log(switchOfStuff(4)); // "stuff"

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "Out of Range";
      break;
  }
  return answer;
}
console.log(sequentialSizes(1)); // "Low"
console.log(sequentialSizes(2)); // "Low"
console.log(sequentialSizes(3)); // "Low"
console.log(sequentialSizes(4)); // "Mid"
console.log(sequentialSizes(5)); // "Mid"
console.log(sequentialSizes(6)); // "Mid"
console.log(sequentialSizes(7)); // "High"
console.log(sequentialSizes(8)); // "High"
console.log(sequentialSizes(9)); // "High"
console.log(sequentialSizes(10)); // "Out of Range"

// Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
      break;
  }
  return answer;
}

console.log(chainToSwitch("bob")); // "Marley"
console.log(chainToSwitch(42)); // "The Answer"
console.log(chainToSwitch(1)); // "There is no #1"
console.log(chainToSwitch(99)); // "Missed me by this much!"
console.log(chainToSwitch(7)); // "Ate Nine"
console.log(chainToSwitch("John")); // "" (empty string)
console.log(chainToSwitch(156)); // "" (empty string)
