function mostrar()
{
    var n1 = parseInt(prompt("Ingresar un número"));
    var n2 = parseInt(prompt("Ingresar el segundo número"));
    var suma = n1 + n2;
    var resta = n1 - n2;

    if (n1 == n2) {
        alert(n1 + "" + n2);
    }
    else if (n1 > n2) {
        alert(resta);
    }

    else if (n1 < n2 && suma > 10) {
        alert("La suma es " + suma + " y supero el 10");
    }
    else {
        alert(suma);
    }


    

}
