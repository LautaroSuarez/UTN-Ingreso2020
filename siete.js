function mostrar() {
    var nota;
    var sexo;
    var sumaNotas = 0;
    var notaBaja = 10 ;
    var sexoBajo;
    var contVaronSeis = 0;
    var cantAlumnos = 5;

    for (var i = 0; i < cantAlumnos; i++) {

        do {

            nota = parseInt(prompt("Ingrese uan nota entre 0 y 10"));

            if (isNaN(nota)) {
                alert("Debe ser un número entre 0 y 10");
                nota = -1;
            }
        }
        while (nota <= 0 || nota > 10);

        sumaNotas = sumaNotas + parseInt(nota);

        do {
            sexo = prompt("Ingrese sexo f/m");
        }
        while (sexo != "f" && sexo != "m")


        if (nota < notaBaja) {
            notaBaja = nota;
            sexoBajo = sexo;
        }
        if (sexo == "m" && nota >= 6) {

            ContVaronSeis++;

        }

    }

    alert("Suma notas "+sumaNotas);
    alert("Promedio de las notas totales = "+(sumaNotas/cantAlumnos));
    alert("La nota mas baja es = " + notaBaja + " de sexo " + sexoBajo);
    alert("La cantidad de varones con nota mayor o igual a 6 es de = " + ContVaronSeis);

}
