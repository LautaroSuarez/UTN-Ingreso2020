function mostrar()
{
    var precio = parseInt(prompt("Ingresar el precio."));
    var porcentaje = parseInt(prompt("Ingresar el poercentaje de descuento"))
    var descuento = precio * porcentaje / 100;
    var precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
