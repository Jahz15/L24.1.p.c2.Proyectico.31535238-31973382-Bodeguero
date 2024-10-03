export default class Cl_mBodega{
    constructor(){
        this.acum10 = 5;
        this.acum20 = 2;
        this.acum50 = 10;
    }
    procesarCliente(cliente){
        if(cliente.tipo == 10){
            this.acum10 += cliente.cantidad;
        }else if(cliente.tipo == 20){
            this.acum20 += cliente.cantidad;
        }else if(cliente.tipo == 50){
            this.acum50 += cliente.cantidad;
        }

    }
    montoFinal10(){
        return (this.acum10 * 10).toFixed(2);}
    montoFinal20(){
        return (this.acum20 * 20).toFixed(2);}
    montoFinal50(){
        return (this.acum50 * 50).toFixed(2);}
    montoFinalTotal(){
      return (Number(this.montoFinal10()) + Number(this.montoFinal20()) + Number(this.montoFinal50())).toFixed(2);}
}