function mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;
    var estado = document.getElementById("estadoCivil").value;
    var soltero = document.getElementsByName("Soltero").values;
    var civil = estado != soltero;
    

    if(edad <= 17 && (estado != civil)){
        alert("Eres muy pequeño para no ser soltero");
    }

	


}//FIN DE LA FUNCIÓN