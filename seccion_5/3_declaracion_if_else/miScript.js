function verificar(){
    let elementoRespuesta = document.getElementById("decision");

    let elementoEdad = document.getElementById("textoEdad");
    let edad = parseInt(elementoEdad.value);

    if (edad < 18) {
        elementoRespuesta.textContent = " tienes " + edad + " años, te falta " + (18 - parseInt(edad)).toString() + " años para ser mayor de edad";

    } else {
        if (edad >= 18 && edad < 21) {
            elementoRespuesta.textContent = " tienes " + edad + " años, te falta " + (21 - parseInt(edad)).toString() + " años para " + 21 + ", no puedes comprar licor"

        } else {
            elementoRespuesta.textContent = " ya puedes comprar licor";
        }
    }
}