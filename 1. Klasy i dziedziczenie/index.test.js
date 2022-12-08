const {
  Computer,
  SuperComputer,
  CryptoMinerStation,
  ComputerGarage,
} = require("./index");

describe("Computer", () => {
  let computer;
  let superComputer;
  let superComputer2;
  let cryptoMinerStation;
  let cryptoMinerStation2;
  let garage;
  beforeEach(() => {
    computer = new Computer(500, 3.5, 4, 7, 2.5);
    superComputer = new SuperComputer(100, 3, 4, 3, 2, 2);
    superComputer2 = new SuperComputer(200, 2, 2, 7, 8, 4);
    cryptoMinerStation = new CryptoMinerStation(50, 2, 2, 2, 1, 5);
    cryptoMinerStation2 = new CryptoMinerStation(50, 3, 3, 3, 1, 10);
    garage = new ComputerGarage();

    garage.addToGarage(computer);
    garage.addToGarage(superComputer);
    garage.addToGarage(superComputer);
    garage.addToGarage(cryptoMinerStation);
    garage.addToGarage(cryptoMinerStation2);
  });

  test("should be defined", () => {
    expect(computer).toBeDefined();
    expect(superComputer).toBeDefined();
    expect(superComputer2).toBeDefined();
    expect(cryptoMinerStation).toBeDefined();
    expect(cryptoMinerStation2).toBeDefined();
    expect(garage).toBeDefined();
  });

  test("should initialize the computer object with the given values", () => {
    expect(computer.mocZasilacza).toBe(500);
    expect(computer.predkoscProcesora).toBe(3.5);
    expect(computer.iloscRdzeni).toBe(4);
    expect(computer.plytaGlowna).toBe(7);
    expect(computer.gpu).toBe(2.5);

    expect(superComputer.mocZasilacza).toBe(100);
    expect(superComputer.predkoscProcesora).toBe(3);
    expect(superComputer.iloscRdzeni).toBe(4);
    expect(superComputer.plytaGlowna).toBe(3);
    expect(superComputer.gpu).toBe(2);
    expect(superComputer.iloscProcesorow).toBe(2);

    expect(cryptoMinerStation.mocZasilacza).toBe(50);
    expect(cryptoMinerStation.predkoscProcesora).toBe(2);
    expect(cryptoMinerStation.iloscRdzeni).toBe(2);
    expect(cryptoMinerStation.plytaGlowna).toBe(2);
    expect(cryptoMinerStation.gpu).toBe(1);
    expect(cryptoMinerStation.iloscGpu).toBe(5);
  });

  test("should throw an error if any of the properties is not positive", () => {
    expect(() => new Computer(-500, 3.5, 4, 7, 2.5)).toThrowError();
    expect(() => new Computer(500, -3.5, 4, 7, 2.5)).toThrowError();
    expect(() => new Computer(500, 3.5, -4, 7, 2.5)).toThrowError();
    expect(() => new Computer(500, 3.5, 4, 7, -2.5)).toThrowError();
    expect(() => new Computer(500, 3.5, 4, -7, 2.5)).toThrowError();

    expect(() => new SuperComputer(-500, 3.5, 4, 7, 2.5, 1)).toThrowError();
    expect(() => new SuperComputer(500, -3.5, 4, 7, 2.5, 1)).toThrowError();
    expect(() => new SuperComputer(500, 3.5, -4, 7, 2.5, 1)).toThrowError();
    expect(() => new SuperComputer(500, 3.5, 4, 7, -2.5, 1)).toThrowError();
    expect(() => new SuperComputer(500, 3.5, 4, -7, 2.5, 1)).toThrowError();
    expect(() => new SuperComputer(500, 3.5, 4, 7, 2.5, -1)).toThrowError();

    expect(
      () => new CryptoMinerStation(-500, 3.5, 4, 7, 2.5, 1)
    ).toThrowError();
    expect(
      () => new CryptoMinerStation(500, -3.5, 4, 7, 2.5, 1)
    ).toThrowError();
    expect(
      () => new CryptoMinerStation(500, 3.5, -4, 7, 2.5, 1)
    ).toThrowError();
    expect(
      () => new CryptoMinerStation(500, 3.5, 4, 7, -2.5, 1)
    ).toThrowError();
    expect(
      () => new CryptoMinerStation(500, 3.5, 4, -7, 2.5, 1)
    ).toThrowError();
    expect(
      () => new CryptoMinerStation(500, 3.5, 4, 7, 2.5, -1)
    ).toThrowError();
  });

  test("should return a string with the computer info when calling the info method with print set to false", () => {
    expect(computer.info()).toBe(
      "Komputer o mocy zasilacza 500W, prędkości procesora 3.5Ghz, ilości rdzeni równej 4, płycie głównej 7, i GPU równym 2.5Ghz"
    );

    expect(superComputer.info()).toBe(
      "Komputer o mocy zasilacza 100W, ilości procesorów równej 2 i prędkości 3Ghz, ilości rdzeni równej 4, płycie głównej 3, i GPU równym 2Ghz"
    );

    expect(cryptoMinerStation.info()).toBe(
      "Komputer o mocy zasilacza 50W, prędkości procesora 2Ghz, ilości rdzeni równej 2, płycie głównej 2, i ilości GPU równej 5 i 1Ghz"
    );
  });

  test("should return the correct calculation of the processors power when calling the calculateProcessorsPower method", () => {
    expect(computer.calculateProcessorsPower()).toBe(16.5);

    expect(superComputer.calculateProcessorsPower()).toBe(24);
    expect(superComputer.timeInCycles(240)).toBe(10);

    expect(cryptoMinerStation.calculateProcessorsPower()).toBe(9);
    expect(cryptoMinerStation.miningTime(5, 10)).toBe(450);
  });
});
