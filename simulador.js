function calcularPrecio(monto,cuotas){

    let intereses;

    if (cuotas == "3") {

        intereses = monto *0.15;
        return intereses;

    }
    else if (cuotas == "6"){

        intereses = monto * 0.30;
        return intereses;

    }
    else if  (cuotas == "9"){

        intereses = monto *0.45;
        return intereses;

    }
    else if  (cuotas == "12"){

        intereses = monto *0.60;
        return intereses;

    }

}

function iva ( monto ){

    return monto *0.21;

}

let monto = parseInt(prompt("Ingrese el precio del producto"));
let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 3, 6, 9, o 12"));
let precioTotal = (monto + calcularPrecio(monto,cuotas)) + iva(monto);

alert("El precio final del producto financiado en " +cuotas + " cuotas es de: " + precioTotal);