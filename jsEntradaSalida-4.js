/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar() {
    var name = prompt("Ingrese su nombre","Escribe aquí.");
    document.getElementById("elNombre").value = name;
}

