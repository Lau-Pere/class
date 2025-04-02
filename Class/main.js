let caja = document.querySelector ("#caja");
let h3 = document.querySelector ("h3");
let circulo = document.querySelector (".circulo");

let botonRojo = document.querySelector ("#rojo");
let botonVerde = document.querySelector ("#verde");
let botonAzul = document.querySelector ("#azul");
let botondescubrir = document.querySelector ("#descubrir")
let mensaje = document.querySelector ("#mensaje")


botonRojo.addEventListener("click", function () {
    caja.style.backgroundColor = "red";
    h3.style.color = "black";
    circulo.style.backgroundColor = "red";
});

botonAzul.addEventListener ("click", function () {
    caja.style.backgroundColor = "blue";
    h3.style.color = "black";
    circulo.style.backgroundColor = "blue";
});

botonVerde.addEventListener ("click", function () {
    caja.style.backgroundColor = "green";
    h3.style.color = "black";
    circulo.style.backgroundColor = "green";
});

botondescubrir.addEventListener("click", function () {
    mensaje.classList.add("mensaje-visible");
    h3.style.color = "purple";
});