// 1.Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
const secondTree = myPlants[1].list[1];

// 2. Record Collection
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};
function updateRecords(records, id, prop, value) {
  const updatedRecords = { ...records };
  if (value === "") {
    delete updatedRecords[id][prop];
  } else {
    if (prop !== "tracks") {
      updatedRecords[id][prop] = value;
    } else {
      if (!updatedRecords[id].hasOwnProperty("tracks")) {
        updatedRecords[id].tracks = [];
      }
      updatedRecords[id].tracks.push(value);
    }
  }
  return updatedRecords;
}

// 3. Iterate with JavaScript While Loops
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray); // Output: [5, 4, 3, 2, 1, 0]

// 4. Iterate with JavaScript For Loops
const myArray1 = [];
for (let i = 1; i <= 5; i++) {
  myArray1.push(i);
}

// 5. Iterate Odd Numbers With a For Loop
const myArray2 = [];
for (let i = 1; i < 10; i += 2) {
  myArray2.push(i);
}
console.log(myArray2);

// 6. Count Backwards With a For Loop
const myArray3 = [];
for (let i = 9; i > 0; i -= 2) {
  myArray3.push(i);
}
console.log(myArray3);

// 7. Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

// 8. Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([[1], [2], [3]])); // Output: 6
console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
); // Output: 5040
console.log(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ])
); // Output: 54

// 9. Iterate with JavaScript Do...While Loops
const myArray4 = [];
let j = 10;
do {
  myArray4.push(i);
  j++;
} while (j < 5);
console.log(myArray4); // Output: [10]
console.log(i); // Output: 11

// 10. Replace Loops using Recursion
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return arr[n - 1] + sum(arr, n - 1);
}
console.log(sum([1], 0)); // Output: 0
console.log(sum([2, 3, 4], 1)); // Output: 2
console.log(sum([2, 3, 4, 5], 3)); // Output: 9
