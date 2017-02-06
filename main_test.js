'use strict';
const chai = require('chai');
const sinon = require('sinon');
const main = require('./main.js');

const assert = chai.assert;

describe('Test stub', () => {
  it('returns hello word', () => {
    assert.equal(main.getHelloWorld(), 'Hello World');
  });
});
