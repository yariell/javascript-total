function enviarFormulario() {
    // capturar informacion del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const anio = document.getElementById("anio").value;

    // crear documento XML
    const xmlData = `
    <usuario>
        <nombre>${nombre}</nombre>
        <email>${email}</email>
        <anio>${anio}</anio>
    </usuario>
    `;

    // almacenar el XML en localStorage
    localStorage.setItem("usuariosXML", xmlData);

    // redirigir a la pagina de confirmacion
    window.location.href = "visualizar.html";

    // evitar que el formulario se envie de la manera tradicional
    return false;
}