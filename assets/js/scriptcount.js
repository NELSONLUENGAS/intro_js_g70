// Defino los valores
let contador = 0;
const precio = 10000;
let precioTotal = precio * contador

// Obtener elementos del DOM 
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
var countLabel = document.querySelector('#count')
let priceLabel = document.getElementById('precio_total')
let unitPriceLabel = document.getElementById('precio_unitario')



// ASIGNO VALORES AL DOM
countLabel.innerText = contador;
unitPriceLabel.innerText = precio
priceLabel.innerText = precioTotal;




// Evento de escuchar
increment.addEventListener('click', () => {
    contador++
    precioTotal = precio * contador

    countLabel.innerText = contador;
    priceLabel.innerText = precioTotal;
})

decrement.addEventListener('click', () => {
    if (contador >= 1) contador-- // contador es verdadero 
    precioTotal = precio * contador

    countLabel.innerText = contador;
    priceLabel.innerText = precioTotal;
})