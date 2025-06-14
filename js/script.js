document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("calcular");
    const mensaje = document.getElementById("mensajeError");
    const resultados = document.getElementById("resultados");

    boton.addEventListener("click", function (event) {
        event.preventDefault();

        let monto = document.getElementById("monto").value;
        let cuotas = document.getElementById("cuotas").value;
        let interes = document.getElementById("interes").value;

        if (monto === "" || cuotas === "" || interes === "") {
            mensaje.style.display = "block";
            resultados.classList.add("hidden");
            return;
        }

        mensaje.style.display = "none";

        monto = parseFloat(monto);
        cuotas = parseInt(cuotas);
        interes = parseFloat(interes);

        let interesMensual = interes / 12 / 100;
        let pagoMensual = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -cuotas));
        let totalConInteres = pagoMensual * cuotas;
        let totalSinInteres = monto;

        document.getElementById("pagoMensual").innerText = pagoMensual.toFixed(2);
        document.getElementById("interesMensual").innerText = (interesMensual * 100).toFixed(2) + "%";
        document.getElementById("totalConInteres").innerText = totalConInteres.toFixed(2);
        document.getElementById("totalSinInteres").innerText = totalSinInteres.toFixed(2);
        document.getElementById("tiempoTotal").innerText = cuotas + " meses";

        resultados.classList.remove("hidden");
    });

document.getElementById("cambiarColor").addEventListener("click", function () {
    const colorAleatorio = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = colorAleatorio;
});

});
