/* Given a string, remove any characters that are not unique from the string.

Examples
------------------------------------
Input                 |	Output
------------------------------------
str:                  |
"abccdefe"            | "abdf"
------------------------------------
str:                  |
"hello there"         | "o tr"
------------------------------------
str:                  |
"xyz"	              | "xyz"
------------------------------------
str:                  |
"iiii"                |	""
------------------------------------
*/

function onlyUnique(str) {
  var unique = [];
  var notUnique = [];
  var result = "";
  //iterate over string pushing letters into the unique array
  for (var i =0; i < str.length; i++) {
    if (unique.indexOf(str[i]) === -1) {
      unique.push(str[i]);
      //if the current character already exists in the unique array push it into the notUnique array
    } else {
      notUnique.push(str[i]);
    }
  }

  for (var i = 0; i < str.length; i++) {
    //iterate over the string adding to the result-string any characters not present in the notUnique array
    if (notUnique.indexOf(str[i]) === -1) {
      result+= str[i];
    }
  }
  return result;
}
