/* Return an array that contains the power set of a given string.
The power set is a set of all the possible subsets,
including the empty set.
Make sure your code does the following:
All characters in a subset should be sorted alphabetically,
and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once,
e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as
if it only contained one ‘a’. See the result below.
Examples
Input	       Output
string:
"a"	           [ "", "a" ]
string:
"ab"	   [ "", "a", "ab", "b" ]

string:
"horse"	  [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]

string:
"obama"  	[ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]*/

var powerSet = function(str) {

  var set = [];
  var hash = {};
  if (!str) { str = ''; }
  str = str.split('').sort();

  // remove duplicates
  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      str.splice(i, 1);
      i--;
    }
  }

  // recursive through the sub sets
  var recurse = function(strSet) {
    var joined = strSet.join('');

    // check if we have visited this combo
    if (hash[joined]) { return; }
    hash[joined] = true;
    set.push(joined);

    // don't recurse to empty set - add it once at the end
    if (strSet.length === 1) { return; }

    // recurse all subsets
    for (var i = 0; i < strSet.length; i++) {
      var subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
      recurse(subSet);
    }
  };
  recurse(str);
  set.push(''); // the power set, by definition, includes the empty set

  return set;
  };
