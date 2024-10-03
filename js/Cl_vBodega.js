export default class Cl_vBodega {
    constructor(controlador) {
        this.vista = document.getElementById("bodegaForm");
        this.tabla = document.getElementById("bodegaForm_tabla");
        this.lblMontoFinal10 = document.getElementById("bodegaForm_lblMontoFinal10");
        this.lblMontoFinal20 = document.getElementById("bodegaForm_lblMontoFinal20");
        this.lblMontoFinal50 = document.getElementById("bodegaForm_lblMontoFinal50");
        this.lblMontoFinalTotal = document.getElementById("bodegaForm_lblMontoFinalTotal");
        this.btAgregar = document.getElementById("bodegaForm_btAgregar");
        this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    reportarCliente({
        cedula,
        tipo,
        cantidad,
        montoCuenta,
        montoFinal10,
        montoFinal20,
        montoFinal50,
        montoFinalTotal
    }) {
        this.tabla.innerHTML += `
            <tr>
                <td>${cedula}</td>
                <td>$${tipo}</td>
                <td>${cantidad}</td>
                <td>$${montoCuenta}</td>
            </tr>`;
        this.lblMontoFinal10.innerHTML = montoFinal10;
        this.lblMontoFinal20.innerHTML = montoFinal20;
        this.lblMontoFinal50.innerHTML = montoFinal50;
        this.lblMontoFinalTotal.innerHTML = montoFinalTotal; 
    }
}