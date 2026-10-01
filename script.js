// Constante: cotización del dólar
const DOLAR = 1400;

// Función
function convertir(){

    // Variable
    let monto = parseFloat(document.getElementById("monto").value);

    // Variable
    let tipo = document.getElementById("tipo").value;

    // Variable
    let resultado;

    if(isNaN(monto)){
        alert("Ingrese un monto válido.");
        return;
    }

    if(tipo == "pesoDolar"){
        resultado = monto / DOLAR;
        document.getElementById("resultado").innerHTML =
            "$ " + monto + " = USD " + resultado.toFixed(2);
    }else{
        resultado = monto * DOLAR;
        document.getElementById("resultado").innerHTML =
            "USD " + monto + " = $ " + resultado.toFixed(2);
    }

}