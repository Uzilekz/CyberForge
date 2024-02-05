// Bienvenida a la tienda
let nombreUsuario = prompt("Ingrese su nombre:");

if (nombreUsuario) {
    alert("¡Hola " + nombreUsuario + "! Bienvenido a 'CyberForge'.");
} else {
    alert("¡Bienvenido a 'CyberForge'!");
}

// Lista de productos con sus precios
let productos = [
    { nombre: "Procesador", precio: 50000 },
    { nombre: "Tarjeta Gráfica", precio: 100000 },
    { nombre: "Memoria RAM", precio: 20000 },
    { nombre: "Disco Duro", precio: 15000 },
];

// Permitir al usuario comprar productos múltiples
let deseaComprarOtro = true;

while (deseaComprarOtro) {
    // Ofrecer la opción de comprar
    let deseaComprar = confirm("¿Desea realizar una compra?");

    if (deseaComprar) {
        let opcion = parseInt(
            prompt(
                "Ingrese el número del producto que desea comprar: \n 1. Procesador - $50000 \n 2. Tarjeta Gráfica - $100000 \n 3. Memoria RAM - $20000 \n 4. Disco Duro - $15000"
            )
        );

        // Verificar si la opción es válida
        if (opcion >= 1 && opcion <= productos.length) {
            let cantidad = parseInt(
                prompt("Ingrese la cantidad que desea comprar:")
            );

            // Verificar si la cantidad es válida
            if (cantidad > 0) {
                let productoSeleccionado = productos[opcion - 1];
                let total = productoSeleccionado.precio * cantidad;

                alert(
                    "Has agregado " +
                        cantidad +
                        " " +
                        productoSeleccionado.nombre +
                        " al carrito. Total: $" +
                        total
                );
            } else {
                alert("La cantidad ingresada no es válida.");
            }
        } else {
            alert(
                "Opción no válida. Por favor, ingrese un número de producto válido."
            );
        }
    } else {
        alert("Gracias por visitar 'CyberForge'.");
        deseaComprarOtro = false; // Se termina el bucle
    }
}
