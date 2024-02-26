let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Step 1: Remove the last string
secretMessage.pop();

// Step 2: Check the length
console.log(secretMessage.length);

// Step 3: Add 'to' and 'Program' to the end of the array
secretMessage.push("to", "Program");

// Step 4: Replace 'easily' with 'right'
const easilyIndex = secretMessage.indexOf("easily");
secretMessage[easilyIndex] = "right";

// Step 5: Remove the first string
secretMessage.shift();

// Step 6: Add 'Programming' to the beginning of the array
secretMessage.unshift("Programming");

// Step 7: Replace multiple strings with 'know'
const startIndex = secretMessage.indexOf("get");
const endIndex = secretMessage.indexOf("time,");
secretMessage.splice(startIndex, endIndex - startIndex + 1, "know");

// Step 8: Print the secret message as a sentence
console.log(secretMessage.join(" "));
