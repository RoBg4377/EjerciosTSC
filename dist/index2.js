"use strict";
class Gabinete {
    constructor(micro, mother, ram, disco, gI, gpu) {
        this.micro = '';
        this.mother = '';
        this.ram = 0;
        this.disco = 0;
        this.grafIntegradas = false;
        this.gpu = '';
        this.micro = micro;
        this.mother = mother;
        this.ram = ram;
        this.disco = disco;
        this.grafIntegradas = gI;
        this.gpu = gpu;
    }
    ToString() {
        let msj = `gabinete con micro ${this.micro}, placa madre ${this.mother}, ${this.ram} de memoria ram, ${this.disco}  teras de almacenamiento ssd`;
        if (this.grafIntegradas) {
            return msj += ', gpu integrada';
        }
        return msj += `, placa de video ${this.gpu}`;
    }
}
class Monitor {
    constructor(marca, pulg, led) {
        this.marca = '';
        this.pulgadas = 0;
        this.led = false;
        this.marca = marca;
        this.pulgadas = pulg;
        this.led = led;
    }
    ToString() {
        if (this.led) {
            return `Monitor  marca ${this.marca}, de ${this.pulgadas} pulgadas y LED`;
        }
        return `Monitor  marca ${this.marca}, de ${this.pulgadas} pulgadas y no LED`;
    }
}
class Teclado {
    constructor(tipo, bluetooth, idioma) {
        this.tipo = '';
        this.bluetooth = false;
        this.idioma = '';
        this.tipo = tipo;
        this.bluetooth = bluetooth;
        this.idioma = idioma;
    }
    ToString() {
        if (this.bluetooth) {
            return `Teclado ${this.tipo}, idioma: ${this.idioma}, inalámbrico`;
        }
        return `Teclado ${this.tipo}, idioma: ${this.idioma}`;
    }
}
class Mause {
    constructor(gamer, bluetooth) {
        this.gamer = false;
        this.bluetooth = false;
        this.gamer = gamer;
        this.bluetooth = bluetooth;
    }
    ToString() {
        if (this.gamer) {
            if (this.bluetooth) {
                return `Mause gamer, inalámbrico`;
            }
            else {
                return 'Mause gamer';
            }
        }
        return 'Mause inalambrico';
    }
}
let gabinete1 = new Gabinete('AMD Raizen 5600', 'Gigabyte rt456', 16, 2, true, 'ninguno');
let gabinete2 = new Gabinete('AMD Raizen 5600', 'Gigabyte rt456', 16, 2, false, 'RTX 3900');
let monitor1 = new Monitor('Sony', 17, false);
let monitor2 = new Monitor('Samsung', 21, true);
let teclado1 = new Teclado('de membrana', true, 'español de España');
let teclado2 = new Teclado('mecánico', false, 'español lationamericano');
let mause1 = new Mause(true, false);
let mause2 = new Mause(false, true);
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
    constructor(gab, mon, tec, mau) {
        this.gabinete = gab;
        this.monitor = mon;
        this.teclado = tec;
        this.mause = mau;
    }
    ToString() {
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
