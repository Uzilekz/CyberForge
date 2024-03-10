//PRODUCTOS
const productos = [
    //PLACA MADRE
    {
        id: "placaMadre-01",
        titulo: "Motherboard Asus Prime A320m-k",
        imagen: "../img/products/placaMadre/MotherboardAsusPrimeA320m-k.webp",
        categoria: {
            id: "placasMadre",
            nombre: "Placa Madre",
        },
        precio: 150,
    },
    {
        id: "placaMadre-02",
        titulo: "Motherboard Asus Prime A520m-a Ii",
        imagen: "../img/products/placaMadre/MotherboardAsusPrimeA520m-aIi.webp",
        categoria: {
            id: "placasMadre",
            nombre: "Placa Madre",
        },
        precio: 200,
    },
    {
        id: "placaMadre-03",
        titulo: "Motherboard Am4 Gigabyte B450m Ds3h",
        imagen: "../img/products/placaMadre/MotherboardAm4GigabyteB450mDs3h.webp",
        categoria: {
            id: "placasMadre",
            nombre: "Placa Madre",
        },
        precio: 300,
    },

    //PROCESADOR
    //INTEL
    {
        id: "procesadorIntel-01",
        titulo: "Procesador Intel Core i3-10100F",
        imagen: "../img/products/procesador/INTEL/ProcesadorIntelCorei3-10100F.webp",
        categoria: {
            id: "procesadores",
            nombre: "Procesador",
        },
        precio: 80,
    },
    {
        id: "procesadorIntel-02",
        titulo: "Procesador Intel Core i5-10400",
        imagen: "../img/products/procesador/INTEL/ProcesadorIntelCorei5-10400.webp",
        categoria: {
            id: "procesadores",
            nombre: "Procesador",
        },
        precio: 145,
    },
    {
        id: "procesadorIntel-03",
        titulo: "Procesador Intel Core i7-10700",
        imagen: "../img/products/procesador/INTEL/ProcesadorIntelCorei7-10700.webp",
        categoria: {
            id: "procesadores",
            nombre: "Procesador",
        },
        precio: 250,
    },
    //AMD
    {
        id: "procesadorAMD-01",
        titulo: "Procesador AMD Ryzen 3 3200G",
        imagen: "../img/products/procesador/AMD/ProcesadorAMDRyzen33200G.webp",
        categoria: {
            id: "procesadores",
            nombre: "Procesador",
        },
        precio: 110,
    },
    {
        id: "procesadorAMD-02",
        titulo: "Procesador AMD Ryzen5 5600X",
        imagen: "../img/products/procesador/AMD/ProcesadorAMDRyzen55600X.webp",
        categoria: {
            id: "procesadores",
            nombre: "Procesador",
        },
        precio: 175,
    },
    {
        id: "procesadorAMD-03",
        titulo: "Procesador AMD Ryzen 7 5700G",
        imagen: "../img/products/procesador/AMD/ProcesadorAMDRyzen75700G.webp",
        categoria: {
            id: "procesadores",
            nombre: "Procesador",
        },
        precio: 250,
    },

    //TARJETA GRAFICA
    //NVIDIA
    {
        id: "tarjetaGraficaNvidia-01",
        titulo: "Placa De Video Nvidia Gigabyte GeForce 10 Series GT1030 2GB",
        imagen: "../img/products/tarjetaGrafica/NVIDIA/PlacaDeVideoNvidiaGigabyteGeForce10SeriesGT10302GB.webp",
        categoria: {
            id: "tarjetasGraficas",
            nombre: "Tarjeta Grafica",
        },
        precio: 125,
    },
    {
        id: "tarjetaGraficaNvidia-02",
        titulo: "Placa De Video Nvidia Evga KO Gaming GeForce RTX 20 Series RTX2060 6GB",
        imagen: "../img/products/tarjetaGrafica/NVIDIA/PlacaDeVideoNvidiaEvgaKOGamingGeForceRTX20SeriesRTX20606GB.webp",
        categoria: {
            id: "tarjetasGraficas",
            nombre: "Tarjeta Grafica",
        },
        precio: 250,
    },
    {
        id: "tarjetaGraficaNvidia-03",
        titulo: "Placa De Video Nvidia GeForce RTX 30 Series RTX3090 24GB",
        imagen: "../img/products/tarjetaGrafica/NVIDIA/PlacaDeVideoNvidiaGeForceRTX30SeriesRTX309024GB.webp",
        categoria: {
            id: "tarjetasGraficas",
            nombre: "Tarjeta Grafica",
        },
        precio: 500,
    },

    //AMD
    {
        id: "tarjetaGraficaAMD-01",
        titulo: "Placa De Video AMD Afox Radeon RX500 Series RX580 8GB",
        imagen: "../img/products/tarjetaGrafica/AMD/PlacaDeVideoAMDAfoxRadeonRX500SeriesRX5808GB.webp",
        categoria: {
            id: "tarjetasGraficas",
            nombre: "Tarjeta Grafica",
        },
        precio: 150,
    },
    {
        id: "tarjetaGraficaAMD-02",
        titulo: "Placa De Video AMD Radeon RX6700 Series RX6700XT 12GB",
        imagen: "../img/products/tarjetaGrafica/AMD/PlacaDeVideoAMDSapphirePulseRadeonRX6700SeriesRX6700XT12GB.webp",
        categoria: {
            id: "tarjetasGraficas",
            nombre: "Tarjeta Grafica",
        },
        precio: 300,
    },
    {
        id: "tarjetaGraficaAMD-03",
        titulo: "Placa De Video Radeon RX6900XT 16gb Founders Edition",
        imagen: "../img/products/tarjetaGrafica/AMD/PlacaDeVideoRadeonRX6900XT16gbFoundersEdition.webp",
        categoria: {
            id: "tarjetasGraficas",
            nombre: "Tarjeta Grafica",
        },
        precio: 500,
    },

    //MEMORIA RAM
    {
        id: "memoriaRAM-01",
        titulo: "Memoria Kingston Fury Rgb 8gb Ddr4",
        imagen: "../img/products/memoriaRam/MemoriaKingstonFuryRgb8gbDdr4.webp",
        categoria: {
            id: "memoriasRAM",
            nombre: "Memoria RAM",
        },
        precio: 50,
    },
    {
        id: "memoriaRAM-02",
        titulo: "Memoria Kingston Fury 16gb Ddr4",
        imagen: "../img/products/memoriaRam/MemoriaKingstonFury16gbDdr4.webp",
        categoria: {
            id: "memoriasRAM",
            nombre: "Memoria RAM",
        },
        precio: 100,
    },
    {
        id: "memoriaRAM-03",
        titulo: "Memoria Kingston Fury Renegade Rgb 32gb Ddr4",
        imagen: "../img/products/memoriaRam/MemoriaKingstonFuryRenegadeRgb32gbDdr4.webp",
        categoria: {
            id: "memoriasRAM",
            nombre: "Memoria RAM",
        },
        precio: 175,
    },

    //ALMACENAMIENTO
    //HDD
    {
        id: "almacenamientoHDD-01",
        titulo: "Disco Duro Interno Seagate 1TB",
        imagen: "../img/products/almacenamiento/HDD/DiscoDuroInternoSeagate1TB.webp",
        categoria: {
            id: "almacenamientos",
            nombre: "Almacenamiento",
        },
        precio: 50,
    },
    {
        id: "almacenamientoHDD-02",
        titulo: "Disco Duro Interno Western Digital 2TB",
        imagen: "../img/products/almacenamiento/HDD/DiscoDuroInternoWesternDigital2TB.webp",
        categoria: {
            id: "almacenamientos",
            nombre: "Almacenamiento",
        },
        precio: 75,
    },

    //SSD
    {
        id: "almacenamientoSSD-01",
        titulo: "Disco Solido Interno Kingston 500GB",
        imagen: "../img/products/almacenamiento/SSD/DiscoSolidoInternoKingston500GB.webp",
        categoria: {
            id: "almacenamientos",
            nombre: "Almacenamiento",
        },
        precio: 75,
    },
    {
        id: "almacenamientoSSD-02",
        titulo: "Disco Solido Interno Kingston 960GB",
        imagen: "../img/products/almacenamiento/SSD/DiscoSolidoInternoKingston960GB.webp",
        categoria: {
            id: "almacenamientos",
            nombre: "Almacenamiento",
        },
        precio: 125,
    },
];

const contenedorProductos = document.querySelector("#productsContainer");
const botonesCategorias = document.querySelectorAll(".nav-menu__button");

//Cargar productos en el HTML
function cargarProductos() {
    //Busca en la lista de objetos(productos), por cada "producto"(variable que se le da a cada uno de los objetos), crea un div para cada uno de ellos con la información siguiente.
    productos.forEach((producto) => {
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
}

cargarProductos();

//Cambiar entre categorias de productos
botonesCategorias.foreach((boton) => {
    boton.addEventListener("click", (e) => {
        e.currentTarget.classList.add("active");
    });
});
