function mostrar()
{
    var planeta = prompt("Planeta", "Ingrese el nombre de un planeta del sistema solar");

    switch (planeta) {
        case "mercurio":
        case "venus":
            alert("Ac� hace m�s calor");
            break;
        case "tierra":
            alert("Ac� vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Ac� hace m�s fr�o");
            break;
        default:
            alert(planeta + " no es un planeta v�lido");
            break;

    }
}
