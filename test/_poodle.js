const { expect } = require('chai');
const { isClass } = require('./utilities');
const Poodle = require('../src/poodle');

let poodle = null;

xdescribe('Poodles', () => {
  beforeEach(() => {
    poodle = new Poodle();
  });

  describe('The Poodle class', () => {
    it('should be a class', () => {
      expect(isClass(Poodle)).to.be.true;
    });

    it('should ???', () => {
      // your code here
    });
  });

});
