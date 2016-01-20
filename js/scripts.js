// var vowels = ["a","e","i","o","u"];

var pigLatin = function(text) {
  if ((text.slice(0,1) !== "a") || (text.slice(0,1) !== "e") ||   (text.slice(0,1) !== "i") || (text.slice(0,1) !== "o") || (text.slice(0,1) !== "u")) {
    return false;
  } else {
      return true;
  }
};




// if ((text.slice(0,1) === "a") || (text.slice(0,1) === "e") ||   (text.slice(0,1) === "i") || (text.slice(0,1) === "o") || (text.slice(0,1) === "u")) {
//   return true;
