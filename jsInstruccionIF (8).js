function mostrar()
{
//tomo la edad  

    var edad = document.getElementById("edad").value;
    var estado = document.getElementById("estadoCivil").value;
    var soltero = document.getElementsByName("Soltero").values;
    var casado = document.getElementsByName("Casado").values;
    var divorciado = document.getElementsByName("Divorciado").values;

    
    if ((edad >= 18) && ((estado == soltero)|| ((estado != casado) && (estado != divorciado)))) {

        alert("Es soltero y no es menor");
    }

   /* 
    if ((edad <= 17) && ((estado == casado) || estado == divorciado)) {
      
    }                                                       
    else {
        alert("Es soltero y no es menor");
    }  

    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
    /*
    if ((edad < 18) && estado != soltero) {

    }
    else {
        alert("Es soltero y no es menor");
    } */
}//FIN DE LA FUNCIÓN