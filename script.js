/* Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"] */
let convertToLowerCase = (char) => {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < upperCase.length; i++) {
    if (char == upperCase[i]) {
      char = lowerCase[i];
    }
  }
  return char;
};

let convertWordToLowerCase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += convertToLowerCase(str[i]);
  }
  return result;
};
let arrayToConvetLower = (string) => {
  let outputArray = [];
  for (let i = 0; i < string.length; i++) {
    outputArray.push(convertWordToLowerCase(string[i]));
  }
  return outputArray;
};
let sampleInput = ["MA", "SA", "I", "SCH", "OOL"];
let ouput = arrayToConvetLower(sampleInput);
console.log(ouput);
