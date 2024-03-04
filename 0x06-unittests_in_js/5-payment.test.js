// 5-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');  // Update to 5-payment.js
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create a spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log the correct message and be called once for (100, 20)', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');

    // Assert that console.log was called only once
    sinon.assert.calledOnce(consoleSpy);
  });

  it('should log the correct message and be called once for (10, 10)', () => {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called with the correct message
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');

    // Assert that console.log was called only once
    sinon.assert.calledOnce(consoleSpy);
  });
});
