const { expect } = require("chai");
const { isClass } = require("./utilities");
const Cat = require("../src/cat");

let cat = null;

describe("Cat", () => {
  beforeEach(() => {
    cat = new Cat();
  });

  describe("The Cat class", () => {
    it("should be a class", () => {
      expect(isClass(Cat)).to.be.true;
    });

    it("should ???", () => {
      // your code here
      expect(Animal.prototype.speak).to.exist;
    });

    it("should return the sound when called", () => {
      const sound = "meow";
      animal.sound = sound;
      expect(cat.sound()).to.equal(sound);
    });
  });
});

//   describe('The speak method', () => {
//     it('should exist on the Animal prototype', () => {
//       expect(Animal.prototype.speak).to.exist;
//     });

//     it('should return the sound when called', () => {
//       const sampleSound = "tweet!";
//       animal.sound = sampleSound;
//       expect(animal.speak()).to.equal(sampleSound);
//     });
// });
