// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false



var isValid = function(strings) {
let stack = [];
let hashMap = {") ": "(", "]" : "[", "}" : "{"};
  
  for(let i of strings){
    let isBracket = (i in hashMap);
    if(!isBracket){
      stack.push(i);
      console.log('Pushing stuff in');
      continue;
    } 
    let isEqual = (stack[stack.length-1] === hashMap[i]);
      if(isEqual){
        stack.pop();
        console.log("Popping stuff out");
        continue;
    }
    return false;
  }
  if(stack.length === 0){
    return true
  }
  return false;
  
};

let strings = "([]){{[]}";
// isValid(s);
console.log(isValid(strings));