// Función para abrir la ventana modal y mostrar la información del producto
function openModal(producto) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-product-info");
  
    // Construir la información del producto en la ventana modal
    modalContent.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <p>Stock: ${producto.stock} unidades</p>
      <p>Categoría: ${producto.categoria}</p>
      <p>${producto.descripcion}</p>
      <p>Marca: ${producto.marca}</p>
      <p>Disponibilidad: ${producto.disponibilidad}</p>
    `;
  
    // Mostrar la ventana modal
    modal.style.display = "block";
  
    // Agregar evento para cerrar la ventana modal al hacer clic en la 'x'
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }
  
  // Evento de clic en el botón de "Agregar a lista de deseos"
  const wishlistButtons = document.querySelectorAll('.boton_wishlist');
  wishlistButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Incrementar el contador de wishlist al hacer clic en el botón "Wishlist"
          contadorWishlist++;
          contadorWishlistSpan.textContent = contadorWishlist;
  
          // Obtener la información del producto
          const productoId = button.dataset.productoId;
          const producto = producto.find(producto => producto.id === parseInt(productoId));
  
          // Abrir la ventana modal con la información del producto
          openModal(producto);
      });
  });