// Understanding Undefined Value returned from a Function
let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}
addThree();
addFive();

// Assignment with a Returned Value
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

// Stand in Line
function nextInLine(arr, item) {
  var queue = arr.push(item);
  var removeItem = arr.shift();
  return removeItem;
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Understanding Boolean Values
function welcomeToBooleans() {
  return true;
}
welcomeToBooleans();

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
trueOrFalse(true);
trueOrFalse(false);

// Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

// Practice comparing different values
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");
compareEquality("20", 20);

// Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

// Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);
