
function recomendar(genero) {
    const edad = document.getElementById("edad").value;
    let recomendacion = "";
 
    
    if (edad === "" || edad < 0) {
        recomendacion = "Por favor, ingrese una edad válida.";
    } else {
        
        switch (genero) {
            case "Drama":
                if (edad < 13) {
                    recomendacion = "Puedes ver Casa Blanca";
                } else if (edad <= 15) {
                    recomendacion = "Puedes ver The Shawshank Redemption";
                } else {
                    recomendacion = "Puedes ver Taxi Driver";
                }
                break;
            case "Comedia":
                if (edad < 13) {
                    recomendacion = "Puedes ver Back to the Future";
                } else if (edad <= 15) {
                    recomendacion = " Puedes ver The Truman Show";
                } else {
                    recomendacion = "Puedes ver The Wolf of Wall Street";
                }
                break;
            case "Musical":
                if (edad < 13) {
                    recomendacion = "Puedes ver La La Land";
                } else if (edad <= 15) {
                    recomendacion = "Puedes ver Les Misérables";
                } else {
                    recomendacion = "Puedes ver The Rocky Horror Picture Show";
                }
                break;
            case "Crimen":
                if (edad < 13) {
                    recomendacion = "No hay opciones para esta edad";
                } else if (edad <= 15) {
                    recomendacion = "Puedes ver El Secreto de sus Ojos";
                } else {
                    recomendacion = "Puedes ver The Godfather";
                }
                break;
            default:
                recomendacion = "Por favor, seleccione un género.";
        }
    }
 
    
    document.getElementById("resultado").innerText = recomendacion;
}
 