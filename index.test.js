const removeParentheses = require('./index');

test('Remove the string between parentheses', () => {
  expect(removeParentheses("Guli(s)tan")).toBe("Gulitan");
});

