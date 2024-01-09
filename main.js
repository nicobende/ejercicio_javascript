
/*Ejercicio nota escolar

let notaExamen = prompt ("Cual fue tu resultado en el examen?");
let ordenarHabitacion = prompt ("Ordenaste tu habitacion?");

if (notaExamen >= 7 && ordenarHabitacion == "si") {
   alert ("Podes salir de parranda!");
} else {
   alert("Te quedas en casa, que pena :( ");
}*/


//EJERCICIO SUMA COSTO DE CENA + PROPINA

function sumarCenaMasPropina() {
    let comida = prompt("Cuanto gastaste en la morfi?");
    comida = parseFloat(comida);
    let bebida= prompt("Cuanto gastaste en la bebida?");
    bebida = parseFloat(bebida);
    let postre= prompt("Cuanto gastaste en el postrecito?");
    postre = parseFloat(postre);

    if ((comida) && (bebida) && (postre)) {
        let total = comida + bebida + postre;
        let propina = total * 10 / 100;
        alert("La suma es: " + "$" + total);
        alert ("Propina sugerida para el mozo: " + "$" + propina + " (10%)");
        alert ("Gracias por venir a nuestro local :)")
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}

sumarCenaMasPropina();


/*EJERCICIO DE SUMA PRECIO PRODUCTOS

let carrito = [];

do {
  function comprar() {
    
    let producto = prompt("¿Qué desea comprar?");
    let precioProducto = parseFloat(prompt("¿Cuál es el precio?"));

    if (precioProducto) {
      carrito.push({ producto: producto, precio: precioProducto });
      console.table(carrito);
    } else {
      alert("Por favor, ingrese un precio válido.");
    }

    seguirComprando = confirm("¿Quieres seguir comprando?");
  }

  comprar();

} while (seguirComprando);

function sumarTotal() {
  let totalCarrito = 0;

  for (let i = 0; i < carrito.length; i++) {
    totalCarrito += carrito[i].precio;
  }

  return totalCarrito;
}

let totalCarrito = sumarTotal();

if (totalCarrito !== 0) {
  alert("El total del carrito es: " + "$" + totalCarrito);
}


//EJERCICIO DE PORCENTAJE//

let numero = parseFloat(prompt("Ingrese un número:"));
let porcentaje = parseFloat(prompt("Que porcentaje queres calcular?"));

function calcularPorcentaje(numero, porcentaje) {

    if (typeof numero !== "number" || typeof porcentaje !== "number") {
        alert("Por favor, ingrese solo números");
        return;
    }

    const resultado = (numero * porcentaje) / 100;

    alert("El " + porcentaje + "% de " + numero + " es: " + resultado);
}

calcularPorcentaje(numero, porcentaje); */

