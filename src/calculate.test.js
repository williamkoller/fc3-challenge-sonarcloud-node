const { sum, sub, div } = require('./calculate');

describe('Calculate Test', () => {
  it('make sure x + y is equal to 5 ', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('make sure x - y is equal to 4 ', () => {
    expect(sub(8, 4)).toBe(4);
  });

  it('make sure x / y is equal to 2 ', () => {
    expect(div(10, 5)).toBe(2)
  });
});
