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

let monitor1 = new Monitor('Sony', 17, false);
let monitor2 = new Monitor('Samsung', 21, true);

console.log(monitor1);
console.log(monitor2);
console.log(monitor1.ToString());
console.log(monitor2.ToString());

