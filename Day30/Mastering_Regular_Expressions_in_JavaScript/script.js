// 1. Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);

// 2. Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding);
console.log(result1);

// 3. Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);
console.log(result2);

// 3. Ignore Case While Matching
let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result3 = fccRegex.test(myString1);
console.log(result3);

// 4. Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex)[0];
console.log(result4);

// 5. Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result5 = twinkleStar.match(starRegex);
console.log(result5);

// 6. Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result6 = unRegex.test(exampleStr);
console.log(result6);

// 7. Match Single Character with Multiple Possibilities
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result7 = quoteSample.match(vowelRegex);
console.log(result7);

// 8. Match Letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result8 = quoteSample1.match(alphabetRegex);
console.log(result8);

// 9. Match Numbers and Letters of the Alphabet
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi;
let result9 = quoteSample2.match(myRegex1);
console.log(result9);

// 10. Match Single Characters Not Specified
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi;
let result10 = quoteSample3.match(myRegex2);
console.log(result10);
