describe('pigLatin', function () {
  it("is false if the first letter is a consonant", function() {
    expect (pigLatin("pie")).to.equal(false);
  });

});
