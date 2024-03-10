// Definición de productos y precios
const productos = [
    { nombre: "Procesador", precio: 50000 },
    { nombre: "Tarjeta Gráfica", precio: 100000 },
    { nombre: "Memoria RAM", precio: 20000 },
    { nombre: "Disco Duro", precio: 15000 },
];

// Array para almacenar los productos seleccionados durante la compra
const carrito = [];

// Función para mostrar la lista de productos disponibles
function mostrarProductos() {
    let listaProductos = "Ingrese el número del producto que desea comprar: \n";
    productos.forEach(({ nombre, precio }, index) => {
        listaProductos += `${index + 1}. ${nombre} - $${precio}\n`;
    });
    return listaProductos;
}

// Función para realizar una compra
function comprar() {
    const opcion = parseInt(prompt(mostrarProductos())) || 0;
    const opcionValida = opcion >= 1 && opcion <= productos.length;

    if (opcionValida) {
        const cantidad =
            parseInt(prompt("Ingrese la cantidad que desea comprar:")) || 0;
        const cantidadValida = cantidad > 0;

        if (cantidadValida) {
            const productoSeleccionado = productos[opcion - 1];
            const total = productoSeleccionado.precio * cantidad;

            // Utilizando spread para agregar el producto al carrito
            carrito.push({ ...productoSeleccionado, cantidad, total });

            alert(
                `Has agregado ${cantidad} ${productoSeleccionado.nombre} al carrito. Total: $${total}`
            );
        } else {
            alert("La cantidad ingresada no es válida.");
        }
    } else {
        alert(
            "Opción no válida. Por favor, ingrese un número de producto válido."
        );
    }
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    let mensaje = "Productos en tu carrito:\n";
    carrito.forEach(({ nombre, cantidad, total }) => {
        mensaje += `${cantidad} ${nombre} - Total: $${total}\n`;
    });
    return mensaje;
}

// Bienvenida a la tienda
const nombreUsuario = prompt("Ingrese su nombre:");

if (nombreUsuario) {
    alert(`¡Hola ${nombreUsuario}! Bienvenido a 'CyberForge'.`);

    // Permitir al usuario comprar productos múltiples
    let deseaComprarOtro = true;

    while (deseaComprarOtro) {
        // Ofrecer la opción de comprar
        const deseaComprar = confirm;

        if (deseaComprar) {
            comprar();
            deseaComprarOtro = confirm("¿Desea seguir comprando?");
        } else {
            deseaComprarOtro = false;
        }
    }

    // Si el carrito no está vacío, mostrar el carrito y despedirse
    if (carrito.length > 0) {
        alert(mostrarCarrito());
    }

    alert("Gracias por visitar 'CyberForge'.");
}
