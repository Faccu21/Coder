
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let main = document.querySelector('.main-box');
let cart = document.querySelector('.carrito');
let shop = document.querySelector('.shop');
let total = 0;


mostrarCarrito();

function lugaresDisp() {
    tribunas.forEach((trib) => {
      let { img, precio, nombre, id } = trib
      main.innerHTML += `<div class="card">
                                <div class="img-box">
                                    <img src="${img}"></img>
                                </div>
                                <span>$${precio}</span>
                                <span>${nombre}</span>
                                <button id="book-${id}">Agregar</button>
                            </div>`;
    });
    botones();
  }

  function botones() {
    tribunas.forEach((trib) => {
      document.getElementById(`book-${trib.id}`).addEventListener('click', () => {
        agregarAlCarrito(trib);
      
      });
    });
  }

  

  function agregarAlCarrito(trib) {

    let existe = carrito.some((element) => element.id == trib.id);
  
    if (existe === false) {
      let aux = {
        ...trib
      };
      aux.cantidad = 1;
      carrito.push(aux);
    } else {
      let lugar = carrito.find((element) => element.id == trib.id);
      lugar.cantidad++;
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));

    total += trib.precio;
    actualizarTotal();

    mostrarCarrito();
    miShop();

  }

 
  function mostrarCarrito() {
    
    cart.innerHTML = '';
  
    
    if (carrito.length === 0) {
      cart.innerHTML = `<h4>NINGUNA UBICACIÓN SELECCIONADA</h4>`;
      return;
    }
  
    
    carrito.forEach(({ precio, nombre, cantidad, id }) => {
      
      const div = document.createElement('div');
      div.classList.add('card');
      
      
      div.innerHTML = `<span>$${precio}</span>
                        <span>${nombre}</span>
                        <p>CANTIDAD: ${cantidad}</p>`;
  
      
      const btnBorrar = document.createElement('button');
      btnBorrar.classList.add(`delete-${id}`);
      btnBorrar.innerText = 'Borrar';
      div.appendChild(btnBorrar);
  
      
      btnBorrar.addEventListener('click', () => {
        borrarProducto(id);
      });
  
      
      cart.appendChild(div);
    });
  }

  function borrarProducto(id) {
    
    carrito = carrito.filter((producto) => producto.id !== id);
  
    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    
    total -= tribunas.precio;
    actualizarTotal();
  
  mostrarCarrito();
    miShop();
}

  

  function miShop(){
    let totalShop = carrito.reduce((acc, ite) => acc + ite.cantidad, 0);
    totalShop === 0
    ? (shop.innerText = 0)
    : (shop.innerText = totalShop);
  }

 /*  function ahora(){let total = carrito.reduce((acc,ite)=>acc + ite.precio * ite.cantidad, 0);
    console.log(total);
  } 
  
  ahora() */
  miShop();
  lugaresDisp()


  /* formulario tarjeta */

  const form = document.getElementById("checkout-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const cardNumber = document.getElementById("card-number").value;
  const expirationDate = document.getElementById("expiration-date").value;
  const cvv = document.getElementById("cvv").value;

});


function actualizarTotal() {
  document.getElementById('total').textContent = total.toFixed(2);
}

const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          res ? resolve("Tarjeta ingresada correctamente") : reject("Pago no realizado");
      }, 30000)
  })
}

let final = `<div class="spinner-border text-danger" role="status">
<span class="visually-hidden">Loading...</span>`;
document.getElementById("popup_mensaje").innerHTML = final;
eventoFuturo(true)
.then((respuesta) => {
  console.log(respuesta);
  document.getElementById("productos").innerHTML = respuesta;
})
.catch((respuesta) => {
  console.log(respuesta);
  document.getElementById("productos").innerHTML = respuesta;
})
.finally(() => {
    document.getElementById("popup_mensaje").innerHTML = "";
    console.log("Compra realizada!");
});