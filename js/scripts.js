var vowels = ["a","e","i","o","u"];

var pigLatin = function(word) {
  var split = word.split("");
  console.log(split);
  if (split[0] !== vowels[0]) {
    return false;
  }
};
