export default class Cl_mBodega{
    constructor({cntBilletes10, cntBilletes20, cntBilletes50}){
        this.cntBilletes10 = cntBilletes10;
        this.cntBilletes20 = cntBilletes20;
        this.cntBilletes50 = cntBilletes50;
        this.acum10 = 0;
        this.acum20 = 0;
        this.acum50 = 0;
    }

    set cntBilletes10(b10){
        this._cntBilletes10 = +b10;
    }
    get cntBilletes10(){
        return this._cntBilletes10;
    }

    set cntBilletes20(b20){
        this._cntBilletes20 = +b20;
    }
    get cntBilletes20(){
        return this._cntBilletes20;
    }

    set cntBilletes50(b50){
        this._cntBilletes50 = +b50;
    }
    get cntBilletes50(){
        return this._cntBilletes50;
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
        return ((this.cntBilletes10 + this.acum10) * 10).toFixed(2);}
    montoFinal20(){
        return ((this.cntBilletes20 + this.acum20) * 20).toFixed(2);}
    montoFinal50(){
        return ((this.cntBilletes50 + this.acum50) * 50).toFixed(2);}
    montoFinalTotal(){
      return (Number(this.montoFinal10()) + Number(this.montoFinal20()) + Number(this.montoFinal50())).toFixed(2);}
}