function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split('').reverse().join('');
      if (reverseWord === word) {
        return true
      } else {
        return false
      }
}

/* 
  Add your pseudocode here
  define isPallindrome function
  set variable for reverse string
  compare if they are ===
  return true or false
*/

/*
  Add written explanation of your solution here
  create a const of the reverse string
  split the string into an array of strings
  reverse the string
  join strings in reverse into a string
  strictly compare and return true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("true", isPalindrome("aa"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
