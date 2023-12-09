// Declare JavaScript Variables
var myVariable;

// Storing Values with the Assignment Operator
myVariable = 5;

// Assigning the Value of One Variable to Another
var anotherVariable = myVariable;

// Initializing Variables with the Assignment Operator
var initializedVariable = 10;

// Declare String Variables
var myString = "Hello, World!";

// Understanding Uninitialized Variables
var uninitializedVariable; // This variable is declared but not initialized yet

// Understanding Case Sensitivity in Variables
var caseSensitiveVariable = "Case Sensitive";
var CaseSensitiveVariable = "Not the same as caseSensitiveVariable";

// Explore Differences Between the var and let Keywords
// "var" has a function scope, while "let" has a block scope
if (true) {
  var functionScopedVar = "I am function-scoped";
  let blockScopedVar = "I am block-scoped";
}

// Declare a Read-Only Variable with the const Keyword
const readOnlyVariable = "I cannot be reassigned";

// Attempting to reassign a const variable will result in an error
// readOnlyVariable = "Trying to reassign const variable"; // Uncommenting this line will cause an error
