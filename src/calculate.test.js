const { sum } = require('./calculate')

describe('Calculate Test', () => {
  it('make sure x + y is equal to 5 ', () => {
    expect(sum(2, 3)).toBe(5)
  });
});