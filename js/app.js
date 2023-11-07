function calcularNuevoPrecio() {
    const precioActual = parseFloat(document.getElementById("precioActual").value);
    const porcentajeAumento = parseFloat(document.getElementById("porcentajeAumento").value) / 100;
    const nuevoPrecio = precioActual + (precioActual * porcentajeAumento);
    document.getElementById("nuevoPrecio").textContent = nuevoPrecio.toFixed(0);
}