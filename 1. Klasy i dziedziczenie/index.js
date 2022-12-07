class Computer {
  constructor(mocZasilacza, predkoscProcesora, iloscRdzeni, plytaGlowna, gpu) {
    if (
      mocZasilacza <= 0 ||
      predkoscProcesora <= 0 ||
      iloscRdzeni <= 0 ||
      plytaGlowna <= 0 ||
      gpu <= 0
    ) {
      throw new error("All of the properties should be positive!");
    }
    this.mocZasilacza = mocZasilacza;
    this.predkoscProcesora = predkoscProcesora;
    this.iloscRdzeni = iloscRdzeni;
    this.iloscRdzeni = plytaGlowna;
    this.gpu = gpu;
  }

  get mocZasilacza() {
    return this.mocZasilacza;
  }

  get predkoscProcesora() {
    return this.predkoscProcesora;
  }

  get iloscRdzeni() {
    return this.iloscRdzeni;
  }

  get plytaGlowna() {
    return this.plytaGlowna;
  }

  get gpu() {
    return this.gpu;
  }

  set mocZasilacza(x) {
    this._mocZasilacza = x;
  }

  set predkoscProcesora(x) {
    this._predkoscProcesora = x;
  }

  set iloscRdzeni(x) {
    this._iloscRdzeni = x;
  }

  set plytaGlowna(x) {
    this._plytaGlowna = x;
  }

  set gpu(x) {
    this._gpu = x;
  }

  info(print) {
    const info = `Komputer o mocy zasilacza ${this._mocZasilacza}W, prędkości procesora ${this._predkoscProcesora}Ghz, ilości rdzeni równej ${this._iloscRdzeni}, płycie głównej ${this._plytaGlowna}, i GPU równym ${this._gpu}Ghz`;
    if (print) {
      console.log(info);
      return;
    }
    return info;
  }

  calculateProcessorsPower() {
    return this._iloscRdzeni * this._predkoscProcesora + this._gpu;
  }
}

class SuperComputer extends Computer {
  constructor(
    mocZasilacza,
    predkoscProcesora,
    iloscRdzeni,
    plytaGlowna,
    gpu,
    iloscProcesorow
  ) {
    if (iloscProcesorow <= 0) {
      throw new error("All of the properties should be positive!");
    }
    super(mocZasilacza, predkoscProcesora, iloscRdzeni, plytaGlowna, gpu);
    this.iloscProcesorow = iloscProcesorow;
  }

  get iloscProcesorow() {
    return this.iloscProcesorow;
  }

  set iloscProcesorow(x) {
    this._iloscProcesorow = x;
  }

  info(print) {
    const info = `Komputer o mocy zasilacza ${this._mocZasilacza}W, ilości procesorów równej ${this._iloscProcesorow} i prędkości ${this._predkoscProcesora}Ghz, ilości rdzeni równej ${this._iloscRdzeni}, płycie głównej ${this._plytaGlowna}, i GPU równym ${this._gpu}Ghz`;
    if (print) {
      console.log(info);
      return;
    }
    return info;
  }

  calculateProcessorsPower() {
    return (
      this._iloscProcesorow * (this._iloscRdzeni * this._predkoscProcesora)
    );
  }

  timeInCycles(time) {
    return (
      time /
      (this._iloscProcesorow * (this._predkoscProcesora * this._iloscRdzeni))
    );
  }
}

class CryptoMinerStation extends Computer {
  constructor(
    mocZasilacza,
    predkoscProcesora,
    iloscRdzeni,
    plytaGlowna,
    gpu,
    iloscGpu
  ) {
    if (iloscGpu <= 0) {
      throw new error("All of the properties should be positive!");
    }
    super(mocZasilacza, predkoscProcesora, iloscRdzeni, plytaGlowna, gpu);
    this.iloscGpu = iloscGpu;
  }

  get iloscGpu() {
    return this.iloscGpu;
  }

  set iloscGpu(x) {
    this._iloscGpu = x;
  }

  info(print) {
    const info = `Komputer o mocy zasilacza ${this._mocZasilacza}W, prędkości procesora ${this._predkoscProcesora}Ghz, ilości rdzeni równej ${this._iloscRdzeni}, płycie głównej ${this._plytaGlowna}, i ilości GPU równej ${this._iloscGpu} i ${this._gpu}Ghz`;
    if (print) {
      console.log(info);
      return;
    }
    return info;
  }

  calculateProcessorsPower() {
    return (
      this._gpu * this._iloscGpu + this._iloscRdzeni * this._predkoscProcesora
    );
  }

  miningTime(time, cost) {
    return time * cost * this.calculateProcessorsPower();
  }
}

class ComputerGarage {
  constructor() {
    this.Computers = [];
    this.SuperComputers = [];
    this.CryptoMinerStations = [];
  }

  addComputer(mocZasilacza, predkoscProcesora, iloscRdzeni, plytaGlowna, gpu) {
    this.Computers.push(
      new Computer(
        mocZasilacza,
        predkoscProcesora,
        iloscRdzeni,
        plytaGlowna,
        gpu
      )
    );
  }

  addSuperComputer(
    mocZasilacza,
    predkoscProcesora,
    iloscProcesorow,
    iloscRdzeni,
    plytaGlowna,
    gpu
  ) {
    this.SuperComputers.push(
      new SuperComputer(
        mocZasilacza,
        predkoscProcesora,
        iloscProcesorow,
        iloscRdzeni,
        plytaGlowna,
        gpu
      )
    );
  }

  addCryptoMinerStation(
    mocZasilacza,
    predkoscProcesora,
    iloscRdzeni,
    plytaGlowna,
    gpu,
    iloscGpu
  ) {
    this.CryptoMinerStations.push(
      new CryptoMinerStation(
        mocZasilacza,
        predkoscProcesora,
        iloscRdzeni,
        plytaGlowna,
        gpu,
        iloscGpu
      )
    );
  }

  info(arr) {
    if (arr === "Computers") {
      if (!this.Computers.length) {
        console.log("no computers:(");
        return;
      }

      this.Computers.map((item) => {
        console.log(this.Computers.indexOf(item) + 1 + ". " + item.info());
      });
      return;
    }

    if (arr === "SuperComputers") {
      if (!this.SuperComputers.length) {
        console.log("no super computers:(");
        return;
      }
      this.SuperComputers.map((item) => {
        console.log(this.SuperComputers.indexOf(item) + 1 + ". " + item.info());
      });
      return;
    }

    if (arr === "CryptoMinerStations" && this.CryptoMinerStations.length) {
      if (!this.CryptoMinerStations.length) {
        console.log("no crypto miner stations:(");
        return;
      }
      this.CryptoMinerStations.map((item) => {
        console.log(
          this.CryptoMinerStations.indexOf(item) + 1 + ". " + item.info()
        );
      });
      return;
    }

    throw new error("Wrong array name!");
  }

  garageInfo() {
    const computerQuantity = this.Computers.length;
    const superComputerQuantity = this.SuperComputers.length;
    const cryptoMinerStationQuantity = this.CryptoMinerStations.length;
    console.log(
      `There are ${computerQuantity} computers, ${superComputerQuantity} super computers, and ${cryptoMinerStationQuantity} crypto miner stations`
    );
  }
}

const garag = new ComputerGarage();
garag.addComputer(1, 1, 1, 1, 1);
garag.addComputer(2, 2, 2, 2, 2);

garag.garageInfo();
