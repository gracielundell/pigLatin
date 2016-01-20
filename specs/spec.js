describe('pigLatin', function () {
  it("will return false if it's a consonant", function() {
    expect (pigLatin("pie")).to.equal(false);
  });
});
