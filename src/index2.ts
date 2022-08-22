class Gabinete {
  private micro: string = '';
  private mother: string = '';
  private ram: number = 0;
  private disco: number = 0;
  private grafIntegradas: boolean = false;
  private gpu: string = '';
  public constructor (micro: string, mother: string, ram: number, disco: number, gI: boolean, gpu:string) {
    this.micro= micro;
    this.mother= mother;
    this.ram= ram;
    this.disco= disco;
    this.grafIntegradas= gI;
    this.gpu= gpu
  }
  public ToString() {
    let msj = `gabinete con micro ${this.micro}, placa madre ${this.mother}, ${this.ram} de memoria ram, ${this.disco}  teras de almacenamiento ssd`
    if(this.grafIntegradas){
          return msj += ', gpu integrada'
    }
    return msj += `, placa de video ${this.gpu}`
  }
}

class Monitor {
  private marca: string = '';
  private pulgadas: number = 0;
  private led: boolean =false;
  public constructor (marca: string, pulg: number, led: boolean) {
    this.marca= marca;
    this.pulgadas= pulg;
    this.led= led
  }
  public ToString() {
    if(this.led){
          return `Monitor  marca ${this.marca}, de ${this.pulgadas} pulgadas y LED`
    }
    return `Monitor  marca ${this.marca}, de ${this.pulgadas} pulgadas y no LED`
  }
}

class Teclado {
  private tipo: string = '';
  private bluetooth: boolean = false;
  private idioma: string = ''
  public constructor (tipo: string, bluetooth: boolean, idioma:string){
    this.tipo = tipo;
    this.bluetooth = bluetooth;
    this.idioma = idioma
  }
  public ToString() {
    if(this.bluetooth){
      return `Teclado ${this.tipo}, idioma: ${this.idioma}, inalámbrico`
    }
    return `Teclado ${this.tipo}, idioma: ${this.idioma}`
  }
}

class Mause {
  private gamer: boolean = false;
  private bluetooth: boolean = false;
  public constructor (gamer: boolean, bluetooth: boolean){
    this.gamer = gamer;
    this.bluetooth = bluetooth;
  }
  public ToString() {
    if(this.gamer){
      if(this.bluetooth){
        return `Mause gamer, inalámbrico`
      }
    else{
    return 'Mause gamer'
    }
    }
    return 'Mause inalambrico'
  }
}

let gabinete1 = new Gabinete('AMD Raizen 5600', 'Gigabyte rt456', 16, 2, true, 'ninguno');
let gabinete2 = new Gabinete('AMD Raizen 5600', 'Gigabyte rt456', 16, 2, false, 'RTX 3900');
let monitor1 = new Monitor('Sony', 17, false);
let monitor2 = new Monitor('Samsung', 21, true);
let teclado1 = new Teclado('de membrana', true, 'español de España');
let teclado2 = new Teclado('mecánico', false, 'español lationamericano')
let mause1 = new Mause(true, false);
let mause2 = new Mause(false, true)

console.log(gabinete1);
console.log(gabinete2);
console.log(gabinete1.ToString());
console.log(gabinete2.ToString());
console.log(monitor1);
console.log(monitor2);
console.log(monitor1.ToString());
console.log(monitor2.ToString());
console.log(teclado1);
console.log(teclado2);
console.log(teclado1.ToString());
console.log(teclado2.ToString());
console.log(mause1);
console.log(mause2);
console.log(mause1.ToString());
console.log(mause2.ToString());

class Pc {
  private gabinete: Gabinete;
  private monitor: Monitor;
  private teclado: Teclado;
  private mause: Mause;
  public constructor(gab: Gabinete, mon: Monitor, tec: Teclado, mau: Mause) {
    this.gabinete = gab;
    this.monitor = mon;
    this.teclado = tec;
    this.mause = mau;
  }
  public ToString() {
    let msj = "Esta PC tiene ";
    msj += this.gabinete.ToString();
    msj += '; ' + this.monitor.ToString();
    msj += '; ' + this.teclado.ToString();
    msj += '; ' + this.mause.ToString() + '.';
    return msj;
  }
}

let Pc1 = new Pc(gabinete1, monitor1, teclado1, mause1);
let Pc2 = new Pc(gabinete2, monitor2, teclado2, mause2);
console.log(Pc1);
console.log(Pc2);
console.log(Pc1.ToString());
console.log(Pc2.ToString());