describe('pigLatin', function () {
  it("will return false if it's a consonant", function() {
    expect (pigLatin("pie")).to.equal(false);
  });

  it("will return false if the second letter is a consonant", function() {
    expect (pigLatin("phish")).to.equal(false);
  });
});
