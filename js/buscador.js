
const btnBuscar = document.getElementById ('btnbuscar');
const ingreso = parseInt (document.getElementById ("ingreso").value);
const salida = parseInt (document.getElementById ("salida").value);

class Pasajero {
    constructor (ciudad, ingreso, salida, huespedes, habitacion) {
        this.ciudad = ciudad;
        this.ingreso = ingreso;
        this.salida = salida;
        this.huespedes = huespedes;
        this.habitacion = habitacion;
    }
}

const nuevPasajeros = [];
btnBuscar.addEventListener ("click", (e) => {
    e.preventDefault ();
    const ciudad = document.getElementById ("ciudad").value;
    const ingreso = parseInt (document.getElementById ("ingreso").value);
    const salida = parseInt (document.getElementById ("salida").value);
    const huespedes = document.getElementById ("huespedes").value;
    const habitacion = document.getElementById ("habitacion").value;
    
    const newPasajero = new Pasajero (ciudad, ingreso, salida, huespedes, habitacion);
    nuevPasajeros.push (newPasajero);
    console.log (newPasajero)
})

const diasAlojamiento = () => {
    const result = parseInt (salida - ingreso) - 1
    console.log (diasAlojamiento)
}




