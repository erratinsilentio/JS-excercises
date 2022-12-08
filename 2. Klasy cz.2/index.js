// ZADANIE 1
String.prototype.upperFirst = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// ZADANIE 2
Number.prototype.isOdd = function () {
  if (this % 2 === 0) return true;
  return false;
};

Number.prototype.isEven = function () {
  if (this % 2 != 0) return true;
  return false;
};

// ZADANIE 3
class Fish {
  constructor(age, hungerLevel, isIll) {
    if (
      typeof age != "number" ||
      typeof hungerLevel != "number" ||
      typeof isIll != "boolean"
    ) {
      throw new error(
        "One of the variables has wrong type! Use (number, number, boolean)"
      );
    }
    this.age = age;
    this.hungerLevel = hungerLevel;
    this.isIll = isIll;
  }

  get age() {
    return this._age;
  }

  get hungerLevel() {
    return this._hungerLevel;
  }

  get isIll() {
    return this._isIll;
  }

  set age(x) {
    this._age = x;
  }

  set hungerLevel(x) {
    this._hungerLevel = x;
  }

  set isIll(x) {
    if (typeof x === "boolean") {
      this._isIll = x;
      return;
    }
    throw new error("You can use only true or false");
  }

  toggleIll() {
    this._isIll = !this.isIll;
  }
}

// ZADANIE 4
class Gupik extends Fish {
  constructor(age, hungerLevel, isIll, isSleep) {
    if (
      typeof age != "number" ||
      typeof hungerLevel != "number" ||
      typeof isIll != "boolean" ||
      typeof isSleep != "boolean"
    ) {
      throw new error(
        "One of the variables has wrong type! Use (number, number, boolean, boolean)"
      );
    }
    super(age, hungerLevel, isIll);
    this.isSleep = isSleep;
  }

  toggleSleep() {
    this.isSleep = !this.isSleep;
  }
}

// ZADANIE 5
class Shrimp extends Fish {
  constructor(age, hungerLevel, isIll, isFiltering) {
    if (
      typeof age != "number" ||
      typeof hungerLevel != "number" ||
      typeof isIll != "boolean" ||
      typeof isFiltering != "boolean"
    ) {
      throw new error(
        "One of the variables has wrong type! Use (number, number, boolean, boolean)"
      );
    }
    super(age, hungerLevel, isIll);
    this.isFiltering = isFiltering;
  }

  toggleFiltering() {
    this.isFiltering = !this.isFiltering;
  }
}

// ZADANIE 6
class Akwarium {
  constructor() {
    this.fishes = [];
    this.fillLevel;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  nakarm() {
    this.fishes.forEach((fish) => (fish.hungerLevel = 100));
  }

  isSomeHungry() {
    this.fishes.forEach((fish) => {
      if (fish.hungerLevel < 50) {
        let currentFish = this.fishes.indexOf(fish) + 1;
        console.log(`Fish nr ${currentFish} is hungry`);
      }
    });
  }

  isSomeIll() {
    this.fishes.forEach((fish) => {
      if (fish.isIll) {
        let currentFish = this.fishes.indexOf(fish) + 1;
        console.log(`Fish nr ${currentFish} is ill`);
      }
    });
  }

  fill(level) {
    if (level < 0 || level > 100) {
      throw new error("Level must be between 0 and 100!");
    }
    this.fillLevel = level;
  }

  action() {
    this.fishes.forEach((fish) => {
      if (fish instanceof Gupik && Math.random > 0.5) {
        fish.toggleSleep();
      }

      if (fish instanceof Shrimp && Math.random > 0.5) {
        fish.toggleFiltering();
      }
    });
  }

  info() {
    this.fishes.forEach((fish) => {
      if (fish instanceof Gupik) {
        console.log(
          `Gupik, age ${fish.age}, hunger level ${fish.hungerLevel}, ${
            fish.isIll ? "ill" : "not ill"
          }, ${fish.isSleep ? "asleep" : "awake"}`
        );
      }

      if (fish instanceof Shrimp) {
        console.log(
          `Shrimp, age ${fish.age}, hunger level ${fish.hungerLevel}, ${
            fish.isIll ? "ill" : "not ill"
          }, ${fish.isFiltering ? "filtering" : "not filtering"}`
        );
      }
    });
  }

  wyslijNaKwarantanne(kwarantanna, rybka) {
    // sprawdz czy y to kwarantanna i x to rybka
    if (!(kwarantanna instanceof Kwarantanna && rybka instanceof Fish)) {
      throw new error("Give (kwarantanna, rybka)");
    }
    // Dodaj rybkę do wskazanej kwarantanny
    kwarantanna.addFish(rybka);
    // Uaktualnij obecną tablicę rybek
    this.fishes = this.fishes.map((fish) => {
      if (fish === rybka) return null;
      return fish;
    });
  }
}

class Kwarantanna extends Akwarium {
  constructor() {
    super();
  }

  zwroc(x) {
    if (!(x instanceof Fish)) {
      throw new error("You must give a fish!");
    }
    super.addFish(x);
    this.fishes = this.fishes.map((fish) => {
      if (fish === x) return null;
      return fish;
    });
  }
}
