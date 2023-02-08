document.addEventListener ("DOMContentLoaded", () => {
    fetchData ()
})

const fetchData = async () => {
    try {
        const res = await fetch ("api.json")
        const data = await res.json ()
        cargaProduct (data)
        detecBoton (data)
    } catch (error) {
        console.log (error);
    }
}

const divProductos = document.querySelector ('#divproducto');
const cargaProduct =(data) => {
    const templete = document.querySelector ('#templeteprod')
    const fragment = document.createDocumentFragment ()
    
    data.forEach (producto => {
       
        templete.querySelector ('img').setAttribute ('src', producto.imagen)
        templete.querySelector ('h5').textContent = producto.titulo
        templete.querySelector ('span').textContent = producto.detalle
        templete.querySelector ('p span').textContent = producto.precio
        templete.querySelector ('button').dataset.id = producto.id

        const clonar = templete.cloneNode (true)
        fragment.appendChild (clonar)
    })
    divProductos.appendChild (fragment)
}

let carrito = {}


const detecBoton = (data) => {
    const boton = document.querySelectorAll ('.card button')
    boton.forEach (btn => {
        btn.addEventListener ('click', () => {
            const producto = data.find (item => item.id === parseInt (btn.dataset.id))
            producto.cantidad = 1
            if (carrito.hasOwnProperty (producto.id)) {
                producto.cantidad = carrito[ producto.id].cantidad + 1
            }

            carrito [producto.id] = {...producto}
            productosCarrito ()
        })
    })
    
}

const items = document.querySelector ('#items')

const productosCarrito = () => {

    items.innerHTML = ''

    const templete = document.querySelector ('#templete-carrito').content
    const fragment = document.createDocumentFragment ()
    Object.values (carrito).forEach ( producto => {
        templete.querySelector ('th').textContent = producto.id
        templete.querySelectorAll ('td')[0].textContent = producto.titulo
        templete.querySelectorAll ('td')[1].textContent = producto.cantidad
        templete.querySelector ('span').textContent = producto.precio * producto.cantidad

        const clonar = templete.cloneNode (true)
        fragment.appendChild (clonar)
    })

    items.appendChild (fragment)

    footer ()
    accionbotones ()
}

const footer = document.querySelector ('#foot-carrito')
const impfooter = () => {
    const templete = document.querySelector ('#templete-footer')
    const fragment = document.createDocumentFragment ()

    const numCantidad = Object.values (carrito).reduce ((acc, {cantidad}) => acc = cantidad, 0)
    const precioTotal = Object.values (carrito).reduce ((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
}

const accionbotones = () => {

    
}