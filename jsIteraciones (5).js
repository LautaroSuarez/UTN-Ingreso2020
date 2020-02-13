function mostrar()
{

    var sexo = prompt("ingrese f ó m .");
    var num = 0;

    while (sexo == "f" && num == 0) {

        document.getElementById('Sexo').value = "Femenino";
        num++;
    }
    while (sexo == "m" && num == 0) {

        document.getElementById('Sexo').value = "Masculino";
        num++;
    }
}//FIN DE LA FUNCIÓN