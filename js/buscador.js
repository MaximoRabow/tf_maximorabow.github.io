
const btnBuscar = document.getElementById ('btnbuscar');



class Pasajero {
    constructor (ciudad, ingreso, salida, huespedes) {
        this.ciudad = ciudad;
        this.ingreso = ingreso;
        this.salida = salida;
        this.huespedes = huespedes;
    }
}

const nuevospasajeros = [];

const crearPasajero = () => {
    const ciudad = document.getElementById ('ciudad').value;
    const ingreso = parseFloat (document.getElementById ('ingreso').value);
    const salida = parseFloat (document.getElementById ('salida').value);
    const huespedes = document.getElementById ('huespedes').value;

    const newpasajero = new Pasajero (ciudad, ingreso, salida, huespedes)
    nuevospasajeros.push (newpasajero);
    return nuevospasajeros;
}




    

