function mostrar()
{
//tomo la edad  
    var laHora = document.getElementById('hora').value;
  /*  var hora = laHora >= 7 && laHora >= 11 */

//alert (laHora);
    switch (true) {        /* ES IMPORTANTE EN EL PARENTESIS PONER SI ES VERDADERO O FALSO PARA LOS RANGOS.  */
        case (laHora < 7): {       /* laHora >= 7 && laHora >= 11 TAMBIÉN SIRVE. */
            alert("No");
            break;
        }
        case (laHora < 12): {
            alert("Es de mañana");
            break;
        }
        default: {
            alert("Te equivocaste.");
            break;
        }
    }



}//FIN DE LA FUNCIÓN