
function mostrarPrecio() {
    let fruta = document.getElementById("fruta").value;
    let precio;

    switch (fruta) {
        case "manzana":
            precio = "$15";
            break;
        case "naranja":
            precio = "$20";
            break;
        case "banana":
            precio = "$25";
            break;
        default:
            alert("Fruta no válida");
            return;
    }

    alert("El precio de la " + fruta + " es: " + precio);
}
