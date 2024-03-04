const Utils = {
  calculateNumber(type, a, b) {
    let result;
    try {
      if (type === 'SUM') {
        result = Math.round(a) + Math.round(b);
      } else if (type === 'SUBTRACT') {
        result = Math.round(a) - Math.round(b);
      } else if (type === 'DIVIDE') {
        const roundedB = Math.round(b);
        if (roundedB === 0) {
          throw new Error('Error');
        }
        result = Math.round(a) / roundedB;
      } else {
        throw new Error('Error');
      }
    } catch (error) {
      result = error.message;
    }

    return result;
  }
}

module.exports = Utils;
