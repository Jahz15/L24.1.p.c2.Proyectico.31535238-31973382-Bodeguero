export default class Cl_mCliente {
    constructor({cedula, tipo, cantidad}){
        this.cedula = cedula;
        this.tipo = tipo;
        this.cantidad = cantidad;
    }

set cedula(c){
    this._cedula = c;
}    
get cedula(){
    return this._cedula;
}

set tipo(t){
    this._tipo = t;
}
get tipo(){
    return this._tipo;
}
set cantidad(c){
    this._cantidad = +c;
}
get cantidad(){
    return this._cantidad;
}
calcMontoCuenta(){
    return (this.cantidad * this.tipo).toFixed(2);
}
}