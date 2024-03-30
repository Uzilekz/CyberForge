let productos = [];

fetch("./js/products.json")
    .then((response) => response.json())
    .then((data) => {
        productos = data;
        cargarProductos(productos);
    });

const contenedorProductos = document.querySelector("#productsContainer");
const botonesCategorias = document.querySelectorAll(".nav-menu__button");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".product__description__add");
const numeroCarrito = document.querySelector("#cartNumber");

//Cargar productos en el HTML
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    //Busca en la lista de objetos(productos), por cada "producto"(variable que se le da a cada uno de los objetos), crea un div para cada uno de ellos con la información siguiente.
    productosElegidos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <img class="product__img" src="${producto.imagen}" alt="${producto.titulo}" />
        <div class="product__description">
            <h3 class="product__description__name">${producto.titulo}</h3>
            <p class="product__description__price">$${producto.precio}</p>
            <button class="product__description__add" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}

//Cambiar entre categorias de productos
// Convertir NodeList a Array usando Array.from()
Array.from(botonesCategorias).forEach((boton) => {
    boton.addEventListener("click", (e) => {
        // Remover la clase "active" de todos los botones
        botonesCategorias.forEach((boton) => {
            boton.classList.remove("active");
        });

        // Agregar la clase "active" solo al botón clickeado
        e.currentTarget.classList.add("active");

        // Cambiar nombre del titulo principal
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(
                (producto) => producto.categoria.id === e.currentTarget.id
            );
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(
                (producto) => producto.categoria.id === e.currentTarget.id
            );
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".product__description__add");

    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumeroCarrito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    Toastify({
        text: "AGREGADO AL CARRITO",
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
    const productoAgregado = productos.find(
        (producto) => producto.id === idBoton
    );

    if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(
            (producto) => producto.id === idBoton
        );
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumeroCarrito();

    localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(productosEnCarrito)
    );
}

function actualizarNumeroCarrito() {
    let nuevoNumeroCarrito = productosEnCarrito.reduce(
        (acc, producto) => acc + producto.cantidad,
        0
    );
    numeroCarrito.innerText = nuevoNumeroCarrito;
}
