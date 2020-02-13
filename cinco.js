function mostrar()
{
    var planeta = prompt("Planeta", "Ingrese el nombre de un planeta del sistema solar");

    switch (planeta) {
        case "mercurio":
        case "venus":
            alert("Acá hace más calor");
            break;
        case "tierra":
            alert("Acá vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Acá hace más frío");
            break;
        default:
            alert(planeta + " no es un planeta válido");
            break;

    }
}
