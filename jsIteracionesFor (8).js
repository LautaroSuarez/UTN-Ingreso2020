function mostrar() {

    var num = prompt("Ingresar un número.");
    var flag = true;

    for (i = 2; i <= num-1; i++) {

        if (num % i == 0) {

            flag = false;
        }
    }
    if (flag == true) {

        alert("El número " + num + " es primo.");

    }

    else {
        alert("El numero " + num + "NO es primo");
    }
}




















// }

    /*

  // for (i = 0; pregunta != "no"; i++) {
     for (i = 2; i <= 0 ; i++) {

  //       var numero = parseInt(prompt("Ingresar un número."));

          if (numero % 2 == 0  && numero != 2) {
  //      if ((numero%2)== 0 && (numero = 0 ) {

            alert("El número ingresado no es primo");

        }
                else {

            alert("El número ingresado es primo");
        
        }

    //    var pregunta = prompt("¿Quieres ingresar otro número? si/no");

    }

}//FIN DE LA FUNCIÓN */