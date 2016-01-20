var pigLatin = function(word){
  console.log(word);
  var firstLetter = word.slice(0,1);
  var secondLetter = word.slice(1,2);
  var thirdLetter = word.slice(2,3);
  var fourthLetter = word.slice(3,4);
  console.log(firstLetter);
  var pigWord = "";

  if ((firstLetter === "a") || (firstLetter === "e") || (firstLetter === "i") || (firstLetter === "o") || (firstLetter === "u")) {
    pigWord = word.concat("ay");
    console.log("first PW: ", pigWord);
    return pigWord;
  }
  else if (firstLetter === "q") {
    if (secondLetter === "u") {
      pigWord = word.slice(2) + word.slice(0,2) + "ay";
      console.log("1st letter Q, 2nd letter U: ", pigWord);
      return pigWord;
    } else {
      pigWord = word.slice(1) + word.slice(0,1) + "ay";
      console.log("1st letter Q, 2nd letter NOT U: ", pigWord);
      return pigWord;
    }
  }
  else if (secondLetter === "q") {
    if (thirdLetter === "u") {
      pigWord = word.slice(3) + word.slice(0,3) + "ay";
      console.log("2nd letter Q, 3rd letter U: ", pigWord);
      return pigWord;
    } else {
      pigWord = word.slice(2) + word.slice(0,2) + "ay";
      console.log("2nd letter Q, 3rd letter NOT U: ", pigWord);
      return pigWord;
    }
  }
  else if ((secondLetter === "a") || (secondLetter === "e") || (secondLetter === "i") || (secondLetter === "o") || (secondLetter === "u")) {
    pigWord = word.slice(1) + word.slice(0,1) + "ay";
    console.log("second PW: ", pigWord);
    return pigWord;
  }
  else if ((thirdLetter === "a") || (thirdLetter === "e") || (thirdLetter === "i") || (thirdLetter === "o") || (thirdLetter === "u")) {
    pigWord = word.slice(2) + word.slice(0,2) + "ay";
    console.log("third PW: ", pigWord);
    return pigWord;
  }
  else if ((fourthLetter === "a") || (fourthLetter === "e") || (fourthLetter === "i") || (fourthLetter === "o") || (fourthLetter === "u")) {
    pigWord = word.slice(3) + word.slice(0,3) + "ay";
    console.log("fourth PW: ", pigWord);
    return pigWord;
  }

};
