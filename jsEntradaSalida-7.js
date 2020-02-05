/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var a = parseInt(document.getElementById("numeroUno").value);
    var b = parseInt(document.getElementById("numeroDos").value);
    var resultado = a + b;

    alert("La suma es " + resultado);
	
}

function restar()
{
    var a = parseInt(document.getElementById("numeroUno").value);
    var b = parseInt(document.getElementById("numeroDos").value);
    var resultado = a - b;

    alert("La resta es " + resultado);
}

function multiplicar()
{ 
    var a = parseInt(document.getElementById("numeroUno").value);
    var b = parseInt(document.getElementById("numeroDos").value);
    var resultado = a * b;

    alert("La multiplicación es " + resultado);
	
}

function dividir()
{
    var a = parseInt(document.getElementById("numeroUno").value);
    var b = parseInt(document.getElementById("numeroDos").value);
    var resultado = a / b;

    alert("La división es " + resultado);
}

