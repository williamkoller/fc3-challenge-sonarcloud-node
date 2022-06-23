const { sum } = require('./sum');

describe('Sum Test', () => {
  it('should be a + b to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
