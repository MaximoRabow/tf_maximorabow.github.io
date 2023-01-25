
const btnBuscar = document.getElementById ('btnbuscar');
const formulario = document.getElementById ('form');


class Pasajero {
    constructor (ciudad, ingreso, salida, huespedes) {
        this.ciudad = ciudad;
        this.ingreso = ingreso;
        this.salida = salida;
        this.huespedes = huespedes;
    }
}

const nuevPasajeros = [];
btnBuscar.addEventListener ("click", (e) => {
    e.preventDefault ();
    const ciudad = document.getElementById ("ciudad").value;
    const ingreso = parseFloat (document.getElementById ("ingreso").value);
    const salida = parseFloat (document.getElementById ("salida").value);
    const huespedes = document.getElementById ("huespedes").value;
    

    const newPasajero = new Pasajero (ciudad, ingreso, salida, huespedes)
    nuevPasajeros.push (newPasajero);
   
    console.log (newPasajero)
})




