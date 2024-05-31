document.addEventListener("DOMContentLoaded", function() {
    // Evento de clic para el botón "Comprar"
    const btnComprar = document.getElementById('btnComprar');
    btnComprar.addEventListener('click', function() {
        window.location.href = 'checkout.html'; // Reemplaza 'ruta_de_tu_pagina_compras.html' con la URL deseada
    });
});