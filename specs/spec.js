describe('pigLatin', function () {
  it("will add ay to the word if it begins with a vowel", function() {
    expect (pigLatin("apple")).to.equal("appleay");
  });
  it("will move the first letter from the beginning to the end and add ay if the second letter is a vowel", function() {
    expect (pigLatin("pie")).to.equal("iepay");
  });
  it("will move the first 2 letters from the beginning to the end and add ay if the 3rd letter is a vowel", function() {
    expect (pigLatin("shirt")).to.equal("irtshay");
  });
  it("will move the first 3 letters from the beginning to the end and add ay if the 4th letter is a vowel", function() {
    expect (pigLatin("xylophone")).to.equal("ophonexylay");
  });

});
