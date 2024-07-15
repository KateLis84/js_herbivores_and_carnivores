'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
  }

  takeDamage() {
    this.health -= 50;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(sadAnimal) {
    if (sadAnimal instanceof Herbivore && !sadAnimal.hidden) {
      sadAnimal.takeDamage();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
