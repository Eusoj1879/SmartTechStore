document.addEventListener("DOMContentLoaded", function() {
    // Contador de productos en el carrito
    let contadorProductos = 0;
    const contadorProductosSpan = document.getElementById('contador-productos');

    // Contador de productos en la lista de deseos
    let contadorWishlist = 0;
    const contadorWishlistSpan = document.getElementById('contador-wishlist');

    // Realiza una solicitud para obtener los datos del archivo JSON
    fetch("js/data.json")
        .then(response => response.json())
        .then(data => {
            // Accede a la lista de productos dentro del JSON
            const productos = data.productos;

            // Itera sobre cada producto y crea un elemento para mostrarlo
            productos.forEach(producto => {
                const productoDiv = document.createElement("div");
                productoDiv.classList.add("col-md-4", "mb-4");

                // Rellena el contenido del elemento con los datos del producto
                productoDiv.innerHTML = `
                    <div class="card">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Precio: $${producto.precio}</p>
                            <p class="card-text">Stock: ${producto.stock} unidades</p>
                            <p class="card-text">Categoría: ${producto.categoria}</p>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-text">Marca: ${producto.marca}</p>
                            <p class="card-text">Disponibilidad: ${producto.disponibilidad}</p>
                            <button class="btn btn-white border-dark text-dark btn-comprar boton_compra" onclick="addToCart('${producto.nombre}', ${producto.precio})">Comprar</button>
                            <button class="btn btn-white border-dark btn-wishlist boton_wishlist" data-producto-id="${producto.id}">Wishlist ❤️</button>
                        </div>
                    </div>
                `;

                // Agrega el elemento al contenedor
                document.getElementById("product-container").appendChild(productoDiv);
            });

            // Simulación del proceso de compra
            const comprarButtons = document.querySelectorAll('.boton_compra');
            comprarButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Incrementa el contador de productos al hacer clic en el botón "Comprar"
                    contadorProductos++;
                    contadorProductosSpan.textContent = contadorProductos;
                    
                    alert("Se agrego a la bolsa")
                });
            });

            // Simulación del botón de wishlist
            const wishlistButtons = document.querySelectorAll('.boton_wishlist');
            wishlistButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Incrementa el contador de wishlist al hacer clic en el botón "Wishlist"
                    contadorWishlist++;
                    contadorWishlistSpan.textContent = contadorWishlist;
                    
                    alert("Agregado a mi Wishlist")
                });
            });
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
        });
});

