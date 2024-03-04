// 3-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the sum', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);

    // Assert that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');

    // Restore the spies after the test
    calculateNumberSpy.restore();
    consoleSpy.restore();
  });
});
