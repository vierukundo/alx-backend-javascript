const expect = require('chai').expect;
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should add two rounded numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should subtract b from a (both rounded)', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should divide a by b (both rounded)', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should handle division by zero and return an error', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should handle invalid operation type and return an error', () => {
    expect(calculateNumber('INVALID', 1.4, 4.5)).to.equal('Error');
  });

  it('should handle negative numbers', () => {
    expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
    expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    expect(calculateNumber('DIVIDE', 4.5, -1.4)).to.equal(-5);
  });

  it('should handle zero values', () => {
    expect(calculateNumber('SUM', 0, 4.5)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 0, 4.5)).to.equal(-5);
    expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
  });
});
