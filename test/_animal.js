const { expect } = require('chai');
const Animal = require('../src/animal');

function isClass(func) {
  return typeof func === 'function'
    && /^class\s/.test(Function.prototype.toString.call(func));
}

let animal = null;

describe('Animals', () => {
  beforeEach(() => {
    animal = new Animal();
  });

  describe('The Animal class', () => {
    it('should be a class', () => {
      expect(isClass(Animal)).to.be.true;
    });

    it('should have properties named name and sound', () => {
      expect(animal.hasOwnProperty('name')).to.equal(true);
      expect(animal.hasOwnProperty('sound')).to.equal(true);
    });
  });

  describe('The speak method', () => {
    it('should exist on the Tree prototype', () => {
      expect(Animal.prototype.speak).to.exist;
    });
  });
});
