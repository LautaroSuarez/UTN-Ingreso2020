/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var num1 = parseInt(document.getElementById("PrecioUno").value);
    var num2 = parseInt(document.getElementById("PrecioDos").value);
    var num3 = parseInt(document.getElementById("PrecioTres").value);
    var suma = num1 + num2 + num3;

    alert("La suma da "+suma);
}
function Promedio () 
{
	var num1 = parseInt(document.getElementById("PrecioUno").value);
    var num2 = parseInt(document.getElementById("PrecioDos").value);
    var num3 = parseInt(document.getElementById("PrecioTres").value);
    var suma = num1 + num2 + num3;
    var promedio = Math.floor(suma /3);

    alert("El promedio es "+promedio);

}
function PrecioFinal () 
{
	var num1 = parseInt(document.getElementById("PrecioUno").value);
    var num2 = parseInt(document.getElementById("PrecioDos").value);
    var num3 = parseInt(document.getElementById("PrecioTres").value);
    var suma = num1 + num2 + num3;
    var iva = (suma * 21) /100;
    var precioFinal = suma + iva;

    alert("El precio final es de "+precioFinal+" , el 21% de IVA es "+iva);

}