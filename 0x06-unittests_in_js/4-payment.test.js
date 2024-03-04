// 4-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');  // Update to 4-payment.js
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the sum', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);

    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);

    // Assert that console.log was called with the correct message
    sinon.assert.calledWith(consoleSpy, 'The total is: 10');

    // Restore the stub and spy after the test
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
