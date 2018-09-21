/*
In an alphabetized array of every anagram of a given string, what index would the given string occupy?
Consider an anagram as any sequence of letters. For any word with at least two different letters,
there are other words composed of the same letters but in a different order (for instance,
	“RESISTANCE”/”ANCESTRIES”, which happen to both be dictionary words; for our purposes “SISTANERCE”
	is also a word composed of the same letters as these two).

Given a word, return its index number starting at 1 (not 0) to represent the rank of the anagram
(for example, the 42nd element is the 42nd alphabetic anagram).

Example for given string ‘cat’:

anagramsOfCat = [‘act’, ‘atc’, ‘cat’, ‘cta’, ‘tac’, ‘tca’];

‘cat’ is the 3rd item in this array, so anagramPosition should return 3;
remember that the array is 1-indexed (starts at 1 instead of the usual 0).

Here is the catch: Your function should be able to accept any word 20 letters or less in length
(possibly with some letters repeated), and take no more than 5000 milliseconds to run.

Examples
Input			Output
string:
"BAEBEE"			12
__________________________
string:
"ABBS"				1
__________________________
string:
"BABS"				4
__________________________
string:
"ARCTIC"			42
___________________________
string:
"STARK"				92
____________________________

*/

function anagramPosition (string) {
  
  //creating arrays for easier manipulation
  var word = string.split('');
  var sorted = string.split('').sort();
  var result = 1;

  function factorial(x) {
    return x <= 1 ? 1 : x * factorial(x-1);
  }

  while(word.length){
    for(var i=0; i<sorted.length; i++){
    //shift out any letters that match the sorted,
    //these do not contribute to the anagrams / factorial
      if(sorted[i] === word[0]){
        word.shift();
        sorted.splice(i,1);
        break;
      }else{
        var frequency = {};
        var repeatFact = 1;
        var count = factorial(sorted.length-1);
        //keep track of letter frequencies
        sorted.forEach(function(letter){
          if(frequency[letter]) frequency[letter]++;
          else frequency[letter] = 1;
        });
        //factorial to divide by to account for repeating letters
        for(var char in frequency){
          repeatFact *= factorial(frequency[char]);
        }
        result += count / repeatFact;
      }
    }
  }
  return result;
}
