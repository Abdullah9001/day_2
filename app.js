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
