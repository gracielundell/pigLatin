var pigLatin = function(word){
  var firstLetter = word.slice(0,1);
  var secondLetter = word.slice(1,2);
  var thirdLetter = word.slice(2,3);
  var fourthLetter = word.slice(3,4);
  var pigWord = "";

  if ((firstLetter === "a") || (firstLetter === "e") || (firstLetter === "i") || (firstLetter === "o") || (firstLetter === "u")) {
    pigWord = word.concat("ay");
    return pigWord;
  }
  else if (firstLetter === "q") {
    if (secondLetter === "u") {
      pigWord = word.slice(2) + word.slice(0,2) + "ay";
      return pigWord;
    } else {
      pigWord = word.slice(1) + word.slice(0,1) + "ay";
      return pigWord;
    }
  }
  else if (secondLetter === "q") {
    if (thirdLetter === "u") {
      pigWord = word.slice(3) + word.slice(0,3) + "ay";
      return pigWord;
    } else {
      pigWord = word.slice(2) + word.slice(0,2) + "ay";
      return pigWord;
    }
  }
  else if ((secondLetter === "a") || (secondLetter === "e") || (secondLetter === "i") || (secondLetter === "o") || (secondLetter === "u")) {
    pigWord = word.slice(1) + word.slice(0,1) + "ay";
    return pigWord;
  }
  else if ((thirdLetter === "a") || (thirdLetter === "e") || (thirdLetter === "i") || (thirdLetter === "o") || (thirdLetter === "u")) {
    pigWord = word.slice(2) + word.slice(0,2) + "ay";
    return pigWord;
  }
  else if ((fourthLetter === "a") || (fourthLetter === "e") || (fourthLetter === "i") || (fourthLetter === "o") || (fourthLetter === "u")) {
    pigWord = word.slice(3) + word.slice(0,3) + "ay";
    return pigWord;
  }
};

$(document).ready(function() {
  $("form").submit(function(event){
    var word = $("input#word").val();
    var result = pigLatin(word);

    // $(".pig-latin").text(word);
    $("#showLatin").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
