/* ----------------------

Note: BEFORE tackling each question below,
write a test for it in the test file.

1. Update the sound property to "woof".
2. Add a new property called "sticks" and set it to 0.
3. Update the getOlder method so that it increases
   the age by dog years (7) instead of by one.
4. Add a new method called "fetch" that increases the
   the stick property one and then returns the number
   of sticks fetched.

---------------------- */
const Animal = require('./animal');

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.sound = "woof";
    this.legs = 4;
    this.sticks = 0;
  }

  fetch() {
    this.sticks++;
    return this.sticks;
  }
}

module.exports = Dog;
