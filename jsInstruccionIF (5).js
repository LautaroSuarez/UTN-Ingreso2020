function mostrar()
{
//tomo la edad  

    var edad = document.getElementById("edad").value;

    if ((edad > 0 && edad < 13) || (edad >= 18)) {

        alert("No eres un adolescente.");
    }
    
} //FIN DE LA FUNCIÓN