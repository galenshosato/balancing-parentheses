function balancingParentheses(string) {
  let count = 0
  let found = false
  
  for (let i = 0; i< string.length; i++) {
      if (string[i] === '(') {
        found = true
      }
      if (found) {
         if (string[i] === '(') {
          count += 1
         } else if (string[i] === ')') {
          count -= 1
         }
      } else {
        if (string[i] === ')') {
          count += 1
        }
      }
  }

  return Math.abs(count)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
