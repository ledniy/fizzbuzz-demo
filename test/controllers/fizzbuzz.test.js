const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const fizzBuzzController = require('../../src/controllers/fizzbuzz');

const { expect } = chai;
chai.use(sinonChai);

describe('fizzBuzz controller', () => {
  it('should call res.json', () => {
    const requestMock = {
      body: {
        count: 10
      }
    };
    const responseMock = {
      json: sinon.stub()
    };
    const serviceMock = {
      createList: sinon.stub().returns([])
    }

    const controller = fizzBuzzController(serviceMock);

    controller.post(requestMock, responseMock)

    expect(responseMock.json).to.be.calledWithExactly({
      response: [],
      error: null
    });
  });
});
