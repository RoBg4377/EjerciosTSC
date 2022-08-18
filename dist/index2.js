"use strict";
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
let monitor1 = new Monitor('Sony', 17, false);
let monitor2 = new Monitor('Samsung', 21, true);
console.log(monitor1);
console.log(monitor2);
console.log(monitor1.ToString());
console.log(monitor2.ToString());
