// Step 1: Create input variable
const input = "turpentine and turtles";

// Step 2: Create vowels array
const vowels = ["a", "e", "i", "o", "u"];

// Step 3: Create resultArray
let resultArray = [];

// Step 4: Outer loop to iterate through input text
for (let i = 0; i < input.length; i++) {
  // Step 6: Inner loop to iterate through vowels array
  for (let j = 0; j < vowels.length; j++) {

    // Step 8: Comparing input letter to vowels array
    if (input[i] === vowels[j]) {
      // Step 9: Adding matching letters to resultArray
      resultArray.push(input[i]);

      // Step 10: Doubling 'e'
      if (input[i] === "e") {
        resultArray.push(input[i]);
      }

      // Step 11: Doubling 'u'
      if (input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}

// Step 12: Log resultArray
console.log(resultArray);

// Step 13: Create resultString and join resultArray
const resultString = resultArray.join("").toUpperCase();

// Step 14: Log resultString
console.log(resultString);
