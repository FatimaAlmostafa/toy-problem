//Given a string, return true if its arrangement of parenthesis (),
//curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
//Examples:
//Input:"(x + y) - (4)"
//output:true
//input:"(((10 ) ()) ((?)(:)))"
//output:true
//input:"[{()}]"
//output:true
//input:"(50)("
//output:false
//input:"[{]}"
//output:false

function isBalanced(string) {
  bracketMatcher = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  };

  openBrackets = [];

  //pop stack when encountering a close bracket and match with most recent open bracket.

  for (var i = 0; i < string.length; i++) {
    //iterate over the string and save open brackets into a stack.
    if(string[i] === '(' || string[i] === '{' || string[i] === '['){
      openBrackets.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      if(string[i] !== bracketMatcher[openBrackets.pop()]) return false;
    }
  }
  
  return true;
}
