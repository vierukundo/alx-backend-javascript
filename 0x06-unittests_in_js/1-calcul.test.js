const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should add two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should subtract b from a (both rounded)', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should divide a by b (both rounded)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should handle division by zero and return an error', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should handle invalid operation type and return an error', () => {
    assert.strictEqual(calculateNumber('INVALID', 1.4, 4.5), 'Error');
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, -1.4), -5);
  });

  it('should handle zero values', () => {
    assert.strictEqual(calculateNumber('SUM', 0, 4.5), 5);
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 4.5), -5);
    assert.strictEqual(calculateNumber('DIVIDE', 0, 4.5), 0);
  });
});
