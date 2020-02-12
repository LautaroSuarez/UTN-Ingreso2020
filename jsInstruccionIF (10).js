function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
      var n1 = 1;
    var numeroAleatorio = Math.round(Math.random(n1) * 10);                        /*  ESTE TAMBIÉN FUNCIONA. */ /*var num = Math.floor(Math.random()*10 + 1); */
                                                                                   /* num = Math.floor(Math.random() * ((máximo+1) - minimo) + minimo);
  /*  var numeroAleatorio = Math.floor(Math.random() * 10 + 1); */                  /* ejemplo: var num = Math.floor((Math.random() * (11-5))+5); */
                                                                                        /* num es ahora un número entre 5 y 10, ambos incluidos */
    if (numeroAleatorio >= 9 && numeroAleatorio <= 10) {

        alert("Tu nota es "+numeroAleatorio+" EXCELENTE");

    }
    else if (numeroAleatorio >= 4 && numeroAleatorio <= 8) {

        alert("Tu nota es "+numeroAleatorio+" APROBÓ");
    }
    else {
        alert("Tu nota es "+numeroAleatorio+" VAMOS, LA PRÓXIMA SE PUEDE");
    }
	

}//FIN DE LA FUNCIÓN