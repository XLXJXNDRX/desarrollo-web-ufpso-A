class ProductCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const nombre = this.getAttribute("nombre");
    const precio = this.getAttribute("precio");
    const descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <div class="card">
      <h3>${nombre}</h3>
      <p>${descripcion}</p>
      <strong>$${precio}</strong>
      </div>
`;
}
}

customElements.define("product-card", ProductCard);

const productos = [
  {
    nombre: "Laptop gamer",
    precio: 1200000,
    descripcion: "Laptop para juegos con procesador Intel i7 ",
  },
  {
    nombre: "Audifonos Gamer",
    precio: 500000,
    descripcion: "Audifonos para juegos con sonido envolvente",
  },
  {
    nombre: "Pantalla 4k oled",
    precio: 1300000,
    descripcion: "Pantalla 4k con tecnología oled",
  },
];


fetch("components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
});



async function cargarComponente(id, url) {
  const resp = await fetch(url);
  const html = await resp.text();
  document.getElementById(id).innerHTML = html;
}
cargarComponente("header", "components/header/header.html");
cargarComponente("footer", "components/footer/footer.html");

function mostrarProductos() {
  const catalogo = document.getElementById("catalogo");
  const template = document.getElementById("product-template");
  
  productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    const productCard = clon.querySelector("product-card");
    
    productCard.setAttribute("nombre", producto.nombre);
    productCard.setAttribute("precio", producto.precio);
    productCard.setAttribute("descripcion", producto.descripcion);
    
    catalogo.appendChild(clon);
  });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);
