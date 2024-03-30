let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.getElementById("carritoVacio");
const contenedorCarritoProductos = document.getElementById("carritoProductos");
const contenedorCarritoAcciones = document.getElementById("carritoAcciones");
const contenedorCarritoComprado = document.getElementById("carritoComprado");
let botonesEliminar = document.querySelectorAll(
    ".cart-products__product__delete"
);
const botonVaciar = document.getElementById("carritoAccionesVaciar");
const contenedorTotal = document.getElementById("total");
const botonComprar = document.getElementById("carritoAccionesComprar");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.add("cart-actions");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach((producto) => {
            const div = document.createElement("div");
            div.classList.add("cart-products__product");
            div.innerHTML = `
            <img
            class="cart-products__product__img"
            src="${producto.imagen}"
            alt="${producto.titulo}"
            />
            <div class="cart-products__product__name">
            <small>Nombre</small>
            <h3>${producto.titulo}</h3>
            </div>
            <div class="cart-products__product__quantity">
            <small>Cantidad</small>
            <p>${producto.cantidad}</p>
            </div>
            <div class="cart-products__product__price">
            <small>Precio</small>
            <p>$${producto.precio}</p>
            </div>
            <div class="cart-products__product__subtotal">
            <small>Subtotal</small>
            <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="cart-products__product__delete" id="${producto.id}">
            <i class="fa-solid fa-trash-can"></i>
            </button>
            `;

            contenedorCarritoProductos.append(div);
        });
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.remove("cart-actions");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(
        ".cart-products__product__delete"
    );

    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "ELIMINADO DEL CARRITO",
        duration: 2500,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #b19eff, #462fa1)",
            borderRadius: "1.25em",
            fontSize: "0.85em",
        },
        offset: {
            x: "1em", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: "1em", // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () {}, // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(
        (producto) => producto.id === idBoton
    );

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(productosEnCarrito)
    );
}

cargarProductosCarrito();

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    Swal.fire({
        title: "Estas seguro?",
        text: `Se eliminaran ${productosEnCarrito.reduce(
            (acc, producto) => acc + producto.cantidad,
            0
        )} productos.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminalos!",
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem(
                "productos-en-carrito",
                JSON.stringify(productosEnCarrito)
            );
            cargarProductosCarrito();
        }
    });
}

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0
    );
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    Swal.fire({
        title: "Estas seguro?",
        text: `Se compraran ${productosEnCarrito.reduce(
            (acc, producto) => acc + producto.cantidad,
            0
        )} productos.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, compralos!",
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem(
                "productos-en-carrito",
                JSON.stringify(productosEnCarrito)
            );
            cargarProductosCarrito();
            contenedorCarritoVacio.classList.add("disabled");
            contenedorCarritoProductos.classList.add("disabled");
            contenedorCarritoAcciones.classList.remove("cart-actions");
            contenedorCarritoAcciones.classList.add("disabled");
            contenedorCarritoComprado.classList.remove("disabled");
        }
    });
}
