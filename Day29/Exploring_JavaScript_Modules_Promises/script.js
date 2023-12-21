// 1. Use export to Share a Code Block
const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};
export { uppercaseString, lowercaseString };

// 2.  Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from "./string_functions.js";
uppercaseString("hello");
lowercaseString("WORLD!");

// 3. Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// 4. Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

// 5. Import a Default Export
import subtract from "./math_functions.js";
subtract(7, 4);

// 6. Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {});
// 7. Complete a Promise with resolve and reject
const makeServerRequest1 = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

// 8. Handle a Fulfilled Promise with then
const makeServerRequest2 = new Promise((resolve, reject) => {
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest2.then((result) => {
  console.log(result);
});

// 9. Handle a Rejected Promise with catch
const makeServerRequest3 = new Promise((resolve, reject) => {
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest3
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
