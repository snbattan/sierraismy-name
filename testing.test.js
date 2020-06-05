const { equals } = require('./testing');

describe('my first test', () => {
  it('runs', () => {
    expect(equals(1, 1)).toBe(true);
  });
});
