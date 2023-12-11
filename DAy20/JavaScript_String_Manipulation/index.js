// Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator
const myStr1 = "This is the start. " + "This is the end.";

// Concatenating Strings with the Plus Equals Operator
let myStr2 = "This is the first sentence. ";
myStr2 += "This is the second sentence.";

// Constructing Strings with Variables
const myName = "Subhrangsu";
const myStr3 = "Hello, my name is " + myName + ", how are you?";

// Appending Variables to Strings
const someAdjective = "awesome!";
let myStr4 = "Learning to code is ";
myStr += someAdjective;

// Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
firstLetterOfLastName = lastName1[0];

// Understand String Immutability
let myStr5 = "Jello World";
myStr5 = "Hello World";

// Use Bracket Notation to Find the Nth Character in a String
const lastName2 = "Lovelace";
const thirdLetterOfLastName = lastName2[2];

// Use Bracket Notation to Find the Last Character in a String
const lastName3 = "Lovelace";
const lastLetterOfLastName = lastName3[lastName3.length - 1];

// Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName4 = "Lovelace";
const secondToLastLetterOfLastName = lastName4[lastName4.length - 2];

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks =
  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
