
function mostrar()
{
var contadorDeReservas;
var nombre;
var cantidadDePersonas = 0;                                   // RESOLVER PORQUE SOLO TOMA EL ÚLTIMO NÚMERO INGRESADO
var cantidadDiasEstadia = 0;                                  // HACER EL PARCIAL 9
var formaDePago;
var maximoCantidadDePersonas = 0;
var maximoCantidadDePersonasHuesped = 0;
var maximoDeDias = 0;
var maximoDiasCantidadPersonas = 0;
var contadorQR;
var contadorEfectivo;
var contadorTarjeta;
var formaDePagoMasUsada;
var acumuladorDeDias;                                         // RESOLVER ESTO PARA SACAR PROMEDIO 
var respuesta;
var promedio;

        contadorEfectivo = 0;
        contadorDeReservas = 0;
        contadorQR = 0;
        acumuladorDeDias = 0;

respuesta == "s";

do {
    contadorDeReservas++;
 nombre = prompt("Ingresar nombre del huesped");

    while (!isNaN(nombre)){

    alert("Reintentar. Ingresó un dato invalido.");
    nombre = prompt("Ingresar nombre del huesped. 2");
}

 cantidadDePersonas = parseInt(prompt("Ingresar la cantidad de personas."));

    while (isNaN(cantidadDePersonas) || cantidadDePersonas < 1){

    alert("Reintentar. Ingresó un dato invalido.");
    cantidadPersonas = parseInt(prompt("Ingresar la cantidad de personas"));
}

 cantidadDiasEstadia = parseInt(prompt("Ingresar la cantidad de días de estadia"));

    while (isNaN(cantidadDiasEstadia) || cantidadDiasEstadia <1){

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
maximoDiasCantidadPersonas = cantidadDePersonas;

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
 cantidadDiasEstadia = acumuladorDeDias + cantidadDiasEstadia;

//var respuesta = prompt("¿Quieres ingresar más datos?");
 respuesta = prompt("¿Quieres ingresar más datos?");

 } while (respuesta == "s")
// acumuladorDeDias = acumuladorDeDias + acumuladorDeDias;
 promedio = acumuladorDeDias/contadorDeReservas;

if(contadorQR > contadorEfectivo && contadorQR > contadorTarjeta){

    formaDePagoMasUsada = "qr";

}
else {

    if(contadorTarjeta > contadorEfectivo){

        formaDePagoMasUsada = "tarjeta";
    }
    else {
        formaDePagoMasUsada = "efectivo";
        }
    }

    alert("El huesped que trajo más personas es "+maximoCantidadDePersonasHuesped);
    alert("La cantidad de personas que se quedaron más días es de "+maximoDiasCantidadPersonas);
    alert("La forma de pago más utilizada es "+formaDePagoMasUsada);
    alert("El promedio de la cantidad de dias por reserva es de "+promedio);

 }

/* VALIDAR // ESCRIBIR DE ESTA FORMA CON LA VARIABLE QUE QUEREMOS VALIDAR EN WHILE //


cantidadDePersonas = prompt (cantidadDePersonas);
cantidadDePersonas = parseInt(cantidadDePersonas);

while(isNaN(cantidadDePersonas) || cantidadDePersonas < 0){

cantidadDePersonas = prompt (cantidadDePersonas);
cantidadDePersonas = parseInt(cantidadDePersonas);

 }    */
