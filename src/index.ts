function decoraPersona (target: Function) {
  target.prototype.Saludar = function() {
      console.log("hola amigos")
  }
}
@decoraPersona
class Persona {
  readonly nombre: string;
  readonly apellido: string;
  private añoNacimiento: number;
  public get elNombre(): string {
    return this.nombre;
  }
  public get elApellido(): string {
    return this.apellido;
  }
  constructor(nombre: string, apellido: string, año: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.añoNacimiento = año;
  }
  public presentarse(): string {
    return this.nombre + ' ' + this.apellido;
  }
  public edad(año: number): number {
    return año - this.añoNacimiento;
  }
}


let Rodrigo = new Persona("Rodrigo", "Benavides", 1977);

// console.log(Rodrigo);

// console.log(Rodrigo.presentarse());

// console.log(Rodrigo.edad(2022));

// console.log(Rodrigo.elApellido);

// console.log(Rodrigo.elNombre);

// Rodrigo.Saludar()

// Creación de Superclase operaciónes matemáticas
class OpeMat {
  protected numA: number;
  protected numB: number;
  protected result: number;
  constructor() {
    this.numA = 0;
    this.numB = 0;
    this.result = 0;
  }
  set NumA (num: number){
    this.numA = num;
  }
  set NumB (num:number) {
    this.numB = num;
  }
  get Result(): number {
    return this.result;
  }
}

// Creación de sublcase suma:
class Sumar extends OpeMat {
  Suma (){
    this.result = this.numA + this.numB;
  }
}

// Creación de subclase resta:
class Restar extends OpeMat {
  Resta () {
    this.result = this.numA - this.numB
  }
}

// Intanciamos objeto "sumatoria" y operamos con él
let sumatoria = new Sumar();
sumatoria.NumA= 98;
sumatoria.NumB= 43;
sumatoria.Suma();

// Intanciamos objeto "diferencia" y operamos con él
let diferencia = new Restar();
diferencia.NumA= 98;
diferencia.NumB= 43;
diferencia.Resta();

//imprimimos objetos y resultados por consola
console.log(sumatoria);
console.log(diferencia);
console.log(`El resultado de la primera operación es ${sumatoria.Result} `);
console.log(`El resultado de la segunda operación es ${diferencia.Result} `);

