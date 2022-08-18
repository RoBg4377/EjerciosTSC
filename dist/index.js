"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoraPersona(target) {
    target.prototype.Saludar = function () {
        console.log("hola amigos");
    };
}
let Persona = class Persona {
    constructor(nombre, apellido, año) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.añoNacimiento = año;
    }
    get elNombre() {
        return this.nombre;
    }
    get elApellido() {
        return this.apellido;
    }
    presentarse() {
        return this.nombre + ' ' + this.apellido;
    }
    edad(año) {
        return año - this.añoNacimiento;
    }
};
Persona = __decorate([
    decoraPersona
], Persona);
let Rodrigo = new Persona("Rodrigo", "Benavides", 1977);
console.log(Rodrigo);
console.log(Rodrigo.presentarse());
console.log(Rodrigo.edad(2022));
console.log(Rodrigo.elApellido);
console.log(Rodrigo.elNombre);
// Rodrigo.Saludar()
// Creación de Superclase operaciónes matemáticas
class OpeMat {
    constructor() {
        this.numA = 0;
        this.numB = 0;
        this.result = 0;
    }
    set NumA(num) {
        this.numA = num;
    }
    set NumB(num) {
        this.numB = num;
    }
    get Result() {
        return this.result;
    }
}
// Creación de sublcase suma:
class Sumar extends OpeMat {
    Suma() {
        this.result = this.numA + this.numB;
    }
}
// Creación de subclase resta:
class Restar extends OpeMat {
    Resta() {
        this.result = this.numA - this.numB;
    }
}
// Intanciamos objeto "sumatoria" y operamos con él
let sumatoria = new Sumar();
sumatoria.NumA = 98;
sumatoria.NumB = 43;
sumatoria.Suma();
// Intanciamos objeto "diferencia" y operamos con él
let diferencia = new Restar();
diferencia.NumA = 98;
diferencia.NumB = 43;
diferencia.Resta();
//imprimimos objetos y resultados por consola
console.log(sumatoria);
console.log(diferencia);
console.log(`El resultado de la primera operación es ${sumatoria.Result} `);
console.log(`El resultado de la segunda operación es ${diferencia.Result} `);
