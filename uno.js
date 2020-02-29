
function mostrar()
{
    do {
var contadorDeReservas = 0;
var nombre;
var cantidadDePersonas;
var cantidadDeDiasDeEstadia;
var formaDePago;
var maximoCantidadDePersonas;
var maximoCantidadDePersonasHuesped;
var maximoDeDias;
var maximoDeDiasCantidadPersonas;
var contadorQR;
var contadorEfectivo;
var contadorTarjeta;
var respuesta;
var formaDePagoMasUsada;
var promedio;

        contadorEfectivo = 0;
        contadorDeReservas = 0;
        contadorQR = 0;
        acumuladorDeDias = 0;

respuesta = "s";

contadorDeReservas++;

var nombre = prompt("Ingresar nombre del huesped");

    while (!isNaN(nombre)){

    alert("Reintentar. Ingresó un dato invalido.");
    nombre = prompt("Ingresar nombre del huesped. 2");
}

var cantidadPersonas = parseInt(prompt("Ingresar la cantidad de personas."));

    while (isNaN(cantidadPersonas)){

    alert("Reintentar. Ingresó un dato invalido.");
    cantidadPersonas = parseInt(prompt("Ingresar la cantidad de personas"));
}

var cantidadDiasEstadia = parseInt(prompt("Ingresar la cantidad de días de estadia"));

    while (isNaN(cantidadDiasEstadia)){

    alert("Reintentar. Ingresó un dato invalido");
    cantidadDiasEstadia = parseInt(prompt("Ingresar la cantidad de días de estadia"));
}
    formaDePago = prompt("Ingresar la forma de pago");
while (!isNaN(formaDePago)|| formaDePago != "efectivo" && formaDePago != "tarjeta" && formaDePago != "QR"){

    formaDePago = prompt("Ingresar la forma de pago");
}

if (contadorDeReservas == 1 || maximoCantidadDePersonas < cantidadDePersonas){
    maximoCantidadDePersonas = cantidadDePersonas;
    maximoCantidadDePersonasHuesped = nombre;
}
if(contadorDeReservas == 1 || maximoDeDias < cantidadDiasEstadia){
maximodeDias = cantidadDiasEstadia;
maximoDiasCantidadDePersonas = cantiadDePersonas;

}
switch(formaDePago){

    case "qr":
    contadorQR = contadorQR +1;
    break;
    case "efectivo":
    contadorEfectivo = contadorEfectivo+1;
    break;
    default:
    contadorTarjeta++;
    break;

}
cantidadDeDias = acumuladorDeDias + cantidadDeDias;

var pregunta = prompt("¿Quieres seguir ingresando datos? s/n")

 /*while(!isNaN(pregunta)) {


} */ 
 } while (pregunta == respuesta)

 promedio = acumuladorDeDias/contadorDeReservas;

if(contadorQR > contadorEfectivo && contadorQR > contadorTarjeta){

formaDePagoMasUsada = "qr";

}
else {

    if(contadorTarjeta > contadorEfectivo){

        formaDePagoMasUsada = "efectivo";
    }
    else {
        formaDePagoMasUsada = "tarjeta";
    }
}
 }

