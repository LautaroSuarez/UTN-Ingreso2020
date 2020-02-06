function mostrar() {
    //tomo la edad  
    var edad = document.getElementById("edad").value;

    if (edad >= 13 && edad <= 17) {

        alert("Eres un adolescente");

    }
    else if (edad <13) {

        alert("Eres menor");

    }
    else {
        alert("Eres mayor de edad");
    }
}