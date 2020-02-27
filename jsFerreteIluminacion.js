/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var lamparas = 35;
    var descuento;
    var totalConDescuento;
    var precio;
    var impuestos;
    var cantidadLamparas = getElementById("Cantidad").value;
    var marcas = getElementById("Marca").value;

    switch ("Cantidad") {

        case "1":
        case "2":
            precio = lamparas * cantidadLamparas;
        case "3":
            switch (marcas) {

                case "ArgentinaLuz":
                    precio = lamparas * cantidadLamparas;
                    descuento = (precio * 15) / 100;
                    break;
                case "FelipeLamparas":
                    precio = lamparas * cantidadLamparas;
                    descuento = (precio * 10) / 100;
                    break;
                default:
                    precio = lamparas * cantidadLamparas;
                    descuento = (precio * 5) / 100;
            }
        case "4":
            switch (marcas) {

                case "ArgentinaLuz":
                case "FelipeLamparas":
                    precio = lamparas * cantidadLamparas;
                    descuento = (precio * 25) / 100;
                    break;
                default:
                    precio = lamparas * cantidadLamparas;
                    descuento = (precio * 20) / 100;
            }
        case "5":
            switch (marcas) {

                case "ArgentinaLuz":
                    precio = lamparas * cantidadLamparas;
                    descuento = (precio * 40) / 100;
                    break;
                default:
                    precio = lamparas * cantidadLamparas;
                    descuento = (precio * 30) / 100;
            }
        case "6":
            precio = lamparas * cantidadLamparas;
            descuento = (precio * 50) / 100;
            break;
    }



}


/*
    if (cantidadLamparas >= 6) {

        precio = lamparas * cantidadLamparas;
        descuento = (precio * 50) / 100;

    }
    else if (cantidadLamparas == 5) {

        switch ("Marca")
        {
            case "ArgentinaLuz":
                precio = lamparas * cantidadLamparas;
                descuento = (precio * 40) / 100;
                break;
        }
            default : {
            precio = lamparas * cantidadLamparas;
            descuento = (precio * 30) / 100;
          
        }
    }
    else if (cantidadLamparas == 4) {

        if (marcas == "ArgentinaLuz" || marcas == "FelipeLamparas") {
            precio = lamparas * cantidadLamparas;
            descuento = (precio * 25) / 100;
        }
        else {
            precio = lamparas * cantidadLamparas;
            descuento = (precio * 20) / 100;
        }

    }

    else if (cantidadLamparas == 3) {

        if (marcas == "ArgentinaLuz") {

            precio = lamparas * cantidadLamparas;
            descuento = (precio * 15) / 100;
        }
        else if (marcas == "FelipeLamparas") {

            precio = lamparas * cantidadLamparas;
            descuento = (precio * 10) / 100;
        }
        else {

            precio = lamparas * cantidadLamparas;
            descuento = (precio * 5) / 100;
        }

    }
    
    totalConDescuento = precio - descuento;

    if (totalConDescuento >= 120) {

        impuestos = precio * 10 / 100;
        totalConDescuento = + impuestos;

        alert("IIBB usted pagó " + totalConDescuento + " , siendo " + impuestos + " el impuesto que se pagó.");
    }

    document.getElementById("precioDescuento").value = totalConDescuento;


}
      */