QUnit.test('can be converted to modern numbers', function() {

  ok(validRomanNumeral("I"), "I is a valid roman numeral");
  ok(validRomanNumeral("XI"), "XI is a valid roman numeral");
  ok(!validRomanNumeral("XIz"), "XIz is NOT a valid roman numeral");

})
