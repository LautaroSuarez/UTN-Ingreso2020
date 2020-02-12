
function mostrar()
{
    var ancho = parseInt(prompt("Ingresar el ancho de un rectangulo."));
    var largo = parseInt(prompt("Ingresar el largo de un rectangulo."));
    var perimetro = (largo + ancho) * 2;

    alert("El perimetro es "+perimetro);
}
