// javascript template litarals
let country = "Bangladesh";
let a = 17;
let b = 1;

let sentence = `I love ${country} an it's population is ${a + b} crore`;

console.log(sentence);
let x = 10;
let y = 20;

let demo = document.getElementById("demo");
let result = x + y + " the result is";
demo.innerHTML = result;

function decimalToBinary(decimalNumber) {
  let binaryNumber = "";
  while (decimalNumber > 0) {
    binaryNumber = (decimalNumber % 2) + binaryNumber;
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  return binaryNumber;
}

console.log(decimalToBinary(154));

function convertToBinary(decimal) {
  let binary = "";

  while (decimal > 0) {
    let remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

let decimal = 100;
let binary = convertToBinary(decimal);

console.log(binary);

// second day second lession done

let maxNumber = Number.MAX_VALUE;
console.log(maxNumber);

let fruits = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "grape",
  "pineapple",
  "mango",
  "pear",
  "strawberry",
  "watermelon",
];

let fruitsList = document.getElementById("fruits-list");

for (let i = 0; i < fruits.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = fruits[i];
  fruitsList.appendChild(listItem);
}

// I have stopped at 9 min in video number 21

console.log(fruits[fruits.length - 2]);

const otherList = document.getElementById("other-list");

fruits.forEach(myFunction);

function myFunction(value) {
  const fruitsOlist = document.createElement("li");
  fruitsOlist.innerText = value;
  otherList.appendChild(fruitsOlist);
}

console.log(fruits);

const person = [];
person["firstname"] = "Abdullah";
person["lastname"] = "Jubayer";

console.log(person);

// done javascript array
fruits.pop();
fruits.shift();
fruits.unshift("dalim");
fruits.splice(2, 0, "atafol", "kathal");
console.log(fruits);
fruits.splice(2, 2, "bedena", "jamrul");

let cutting = fruits.slice(1, 5);
console.log(fruits);
console.log(cutting);

// done javascript array method

const flowers = [
  "Rose",
  "Sunflower",
  "Tulip",
  "Lily",
  "Daisy",
  "Orchid",
  "Hydrangea",
  "Peony",
  "Daffodil",
  "Marigold",
];

let sorting = flowers.sort();

console.log(sorting);

let revers = flowers.reverse();
console.log(revers);

const numbers = [46, 48, 39, 12, 2, 1, 83, 74];

function sortFnumber(a, b) {
  return a - b;
}
let sortNumber = numbers.sort(sortFnumber);
console.log(sortNumber);

let maxNumbers = Math.max(numbers);
console.log(maxNumbers);

const otherCars = [
  { type: "Volvo", year: 2016 },
  { type: "Saba", year: 2001 },
  { type: "BMW", year: 2006 },
];

let sortingObject = otherCars.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

console.log(sortingObject);

// Array sort lession done
// Done second day corse
