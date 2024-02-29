// 1-calcul.js

function calculateNumber(type, a, b) {
  let result;

  try {
    if (type === 'SUM') {
      result = Math.round(a) + Math.round(b);
    } else if (type === 'SUBTRACT') {
      result = Math.round(a) - Math.round(b);
    } else if (type === 'DIVIDE') {
      const roundedB = Math.round(b);
      if (roundedB === 0) {
        throw new Error('Error: Division by zero');
      }
      result = Math.round(a) / roundedB;
    } else {
      throw new Error('Invalid operation type');
    }
  } catch (error) {
    result = error.message;
  }

  return result;
}

module.exports = calculateNumber;
