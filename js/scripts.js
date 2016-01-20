var pigLatin = function(word){
  console.log(word);
  var firstLetter = word.slice(0,1);
  var secondLetter = word.slice(1,2);
  console.log(firstLetter);
  var pigWord = "";

  if ((firstLetter !== "a") && (firstLetter !== "e") && (firstLetter !== "i") && (firstLetter !== "o") && (firstLetter !== "u")) {
    pigWord = word.slice(1) + word.slice(0,1) + "ay";
    console.log("first PW: ", pigWord);

  } if ((secondLetter !== "a") && (secondLetter !== "e") && (secondLetter !== "i") && (secondLetter !== "o") && (secondLetter !== "u")) {
    pigWord = word.slice(2) + word.slice(0,2) + "ay";
    console.log("second PW: ", pigWord);

    return false;

  } else {
    pigWord = word.concat("ay");
    console.log("pig word:", pigWord);
    return true;
  }
};
