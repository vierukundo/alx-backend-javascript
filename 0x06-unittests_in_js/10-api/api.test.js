const { expect } = require('chai');
const request = require('request');

describe('Server Test', () => {
  it('tests the server', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should respond with a 200 status code and the correct message for the cart page when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should respond with a 404 status code when accessing the cart page with a non-number :id', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('tests login', (done) => {
    request.post({url:'http://localhost:7865/login', json:{"userName": "Betty"}}, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  // New test suite for /available_payments endpoint
  it('should respond with a 200 status code and the correct payment methods object', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const responseBody = JSON.parse(body);
      expect(responseBody).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
