/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe = parseInt(document.getElementById("importe").value);
    var descuento = (importe * 25) / 100;
    var resultado = importe - descuento;


    document.getElementById("resultado").value = resultado;

}
