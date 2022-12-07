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

  info() {
    console.log(
      `Komputer o mocy zasilacza ${this._mocZasilacza}W, prędkości procesora ${this._predkoscProcesora}Ghz, ilości rdzeni równej ${this._iloscRdzeni}, płycie głównej ${this._plytaGlowna}, i GPU równym ${this._gpu}Ghz`
    );
  }

  calculateProcessorsPower() {
    return this._iloscRdzeni * this._predkoscProcesora + this._gpu;
  }
}

// const komputer = new Computer(10, 50, 2, 100, 10);
// komputer.info();
