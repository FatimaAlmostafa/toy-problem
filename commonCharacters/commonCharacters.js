/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//Works for any number of input strings:
emoveDupes = function(str) {
    var chars = {};
    var output = '';
    for (var i = 0; i < str.length; i++) {
        chars[str[i]] = 1;
    }
    for (var i in chars) {
        output += i;
    }
    return output;
}

commonCharacters = function(string1, string2){
    var output = '';
    for (var i = 0; i < string1.length; i++) {
        if (string2.indexOf(string1[i]) > -1) {
            output += string1[i];
        }
    }
    output = removeDupes(output);
    return output.split(' ').join('')
};
