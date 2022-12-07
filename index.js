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
    return this.age;
  }

  get hungerLevel() {
    return this.hungerLevel;
  }

  get isIll() {
    return this.isIll;
  }

  set age(x) {
    this.age = x;
  }

  set hungerLevel(x) {
    this.hungerLevel = x;
  }

  toggleIll() {
    this.isIll = !this.isIll;
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
