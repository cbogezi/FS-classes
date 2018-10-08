class Animal {
  constructor(name, sound, legs, age) {
    this.name = name || null;
    this.sound = sound || null;
    this.legs = legs || 4;
    this.age = age || 1;
  }

  speak() {
    console.log(this.sound);
  }

  getOlder() {
    this.age++;
    return this.age;
  }
}

module.exports = Animal;
