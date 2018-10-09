const { expect } = require('chai');
const { isClass } = require('./utilities');
const Cat = require('../src/cat');

let cat = null;

xdescribe('Cat', () => {
  beforeEach(() => {
    cat = new Cat();
  });

  describe('The Cat class', () => {
    it('should be a class', () => {
      expect(isClass(Cat)).to.be.true;
    });

    it('should ???', () => {
      // your code here
    });
  });

});