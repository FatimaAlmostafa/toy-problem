//Given an array of words (array of strings), return all words that are palindromes.
// Example: filterPalindromes([ "word", "Ana", "race car" ])
// output: [ "Ana", "race car" ]








function filterPalindromes (words) {
  let palindromesArr = [];
  for ( let i = 0; i < words.length; i++ ) {
    let flip = words[i].split('').reverse().join('');
    flip = flip.toLowerCase().split(' ').join('');
    console.log(flip);
    if ( flip === words[i].toLowerCase().split(' ').join('') ) {
      palindromesArr.push(words[i]);
    }
  }
  return palindromesArr;
}
