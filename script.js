const pelota = document.getElementById("pelota");

let posicion = 20;
let velocidad = 0;
let gravedad = 0.5;
let salto = -12;

function actualizar() {
    velocidad += gravedad;
    posicion += velocidad;

    if (posicion <= 20) {
        posicion = 20;
        velocidad = salto;
    }

    pelota.style.bottom = posicion + "px";

    requestAnimationFrame(actualizar);
}

actualizar();
