// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Assert that the resolved value has the correct data
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signal the end of the test
      })
      .catch((error) => {
        done(error); // Call done with an error if the promise is rejected
      });
  });

});

