class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

module.exports = Animal;
