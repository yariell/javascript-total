async function createPost(titulo, contenido) {
    try {
        let respuesta = await fetch("https://api.restful-api.dev/objects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titulo,
                content: contenido
            }),
        });
        if (!respuesta.ok) {
            throw new Error("Error en la solicitud: " + respuesta.statusText);
        }
        let data = await respuesta.json();
        console.log("registro creado:", data);
    } catch (error) {
        console.error("algo salio mal al crear el registro:", error);
    }
}

createPost("mi titulo de ejemplo", {
    "contenido1": "mi contenido1 de ejemplo",
    "contenido2": "mi contenido2 de ejemplo",})