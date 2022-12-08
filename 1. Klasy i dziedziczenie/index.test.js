const {
  Computer,
  SuperComputer,
  CryptoMinerStation,
  ComputerGarage,
} = require("./index");

describe("Computer", () => {
  let computer;
  beforeEach(() => {
    computer = new Computer(500, 3.5, 4, 7, 2.5);
  });

  test("should be defined", () => {
    expect(computer).toBeDefined();
  });

  test("should initialize the computer object with the given values", () => {
    expect(computer.mocZasilacza).toBe(500);
    expect(computer.predkoscProcesora).toBe(3.5);
    expect(computer.iloscRdzeni).toBe(4);
    expect(computer.plytaGlowna).toBe(7);
    expect(computer.gpu).toBe(2.5);
  });

  test("should throw an error if any of the properties is not positive", () => {
    expect(() => new Computer(-500, 3.5, 4, 7, 2.5)).toThrowError();
    expect(() => new Computer(500, -3.5, 4, 7, 2.5)).toThrowError();
    expect(() => new Computer(500, 3.5, -4, 7, 2.5)).toThrowError();
    expect(() => new Computer(500, 3.5, 4, 7, -2.5)).toThrowError();
    expect(() => new Computer(500, 3.5, 4, -7, 2.5)).toThrowError();
  });

  test("should return a string with the computer info when calling the info method with print set to false", () => {
    expect(computer.info()).toBe(
      "Komputer o mocy zasilacza 500W, prędkości procesora 3.5Ghz, ilości rdzeni równej 4, płycie głównej 7, i GPU równym 2.5Ghz"
    );
  });

  test("should return the correct calculation of the processors power when calling the calculateProcessorsPower method", () => {
    expect(computer.calculateProcessorsPower()).toBe(16.5);
  });
});
