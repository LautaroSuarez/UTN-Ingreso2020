function mostrar() {
    //tomo la edad  
    var laHora = document.getElementById('hora').value;

    switch (true) {
        case (laHora >= 7 && laHora <= 11): {
            alert("Es de mañana");
            break;
        }
        case (laHora >= 12 && laHora <= 19): {
            alert("Es de tarde");
            break;
        }
        case ((laHora >= 20 && laHora <= 24) || (laHora >= 0 && laHora <= 6)): {
            alert("Es de noche");
            break;
        }
        default: {
            alert("La hora no existe");
        }

    }//FIN DE LA FUNCIÓN
}