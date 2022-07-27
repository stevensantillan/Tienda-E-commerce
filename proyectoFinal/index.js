//INICIALIZAR VARIABLES

let contenedorProd = document.getElementById("productos");
let contCarrito = document.getElementById("carro");
let carrito = [];
let finalizarCarrito = document.getElementById("finalizar");

//INICIALIZAR FUNCIONES

cargarCarrito();
mostrarProductos();
mostrarCarrito();
finalizar();

  function cargarCarrito() {
    (localStorage.getItem("StorageCarrito") !== null) ? carrito = JSON.parse(localStorage.getItem("StorageCarrito")) : localStorage.setItem("StorageCarrito", JSON.stringify(carrito))
  }

//MOSTRAR PRODUCTOS

function mostrarProductos(){
    productosTotales.forEach ((productosTotales) =>{
        contenedorProd.innerHTML += `
<div class="card col-3 prods border-danger mb-3 text-center" style="width: 23rem;">
<img src="${productosTotales.avatar}" class="card-img-top" alt="1">
<div class="card-body">
<h5 class="card-title">${productosTotales.nombre}</h5>
<p class="card-text">El precio es $${productosTotales.precio}.</p>
<button onClick="agregarProducto(${productosTotales.id})" class="btn btn-outline-success">Agregar</button>
</div>
</div>`;
});}

//MOSTRAR CARRITO

function mostrarCarrito(){
    carrito.forEach ((carrito) =>{
        contCarrito.innerHTML += `
<div class="card col-3 prods border-danger mb-3 text-center" style="width: 23rem;">
<img src="${carrito.avatar}" class="card-img-top" alt="1">
<div class="card-body">
<h5 class="card-title">${carrito.nombre}</h5>
<p class="card-text">El precio es $${carrito.precio}.</p>
<select class="form-select" aria-label="Default select example" id="cantid">
  <option selected>Seleccione el talle</option>
  <option value="1">36</option>
  <option value="2">37</option>
  <option value="3">38</option>
  <option value="1">39</option>
  <option value="2">40</option>
  <option value="3">41</option>
  <option value="1">42</option>
  <option value="2">43</option>
  <option value="3">44</option>
</select>
<button onClick="quitarCarrito(${carrito.id})" class="btn btn-outline-danger">Quitar</button>
</div>
</div>`;});}

//AGREGAR AL CARRITO

function agregarProducto(ide){
    let index = ide -1;
    let productoSeleccionado = {};
    productoSeleccionado = productosTotales[index];
    !carrito.some(e=>e.id===ide) ? carrito.push(productoSeleccionado) & console.log (carrito) & localStorage.setItem("StorageCarrito", JSON.stringify(carrito)) & location.reload() : alert("El producto ya se encuentra en el carrito")
}

//QUITAR DEL CARRITO

function quitarCarrito(id){
    let carritoQuit = carrito.filter((el)=>el.id !=id);
    carrito = carritoQuit;
    console.log(carritoQuit);
    localStorage.setItem("StorageCarrito", JSON.stringify(carrito));
  console.log(carritoQuit);
  location.reload();
}

//FINALIZAR CARRITO    

let acumulador = 0;
let cantidad = 
console.log(carrito);
console.log(carrito.length);

function finalizar(){    
       finalizarCarrito.innerHTML += `<button id="finalizarCarrito" class="btn btn-outline-success">Finalizar Carrito</button>
        `;}

const finalizarFinal = carrito.map ((el)=>el.precio)
console.log(finalizarFinal);
    
let precioFinal = finalizarFinal.reduce((acumulador,elemento) => acumulador + elemento,0);

let finalFinal = document.getElementById("finalizarCarrito")
finalFinal.onclick = () => {
    Swal.fire({
        title: 'Haz finalizado tu compra',
        text: `El precio final es: $${precioFinal}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
}