
function asignartextoelemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function EncriptarTexto(){
    let textarea = document.getElementById('textoUsuario');
    let texto = textarea.value;
    let textoEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Asignar el texto encriptado al elemento <h1>
    asignartextoelemento('h1', textoEncriptado);
    limpiarCaja();
}

function desencriptarTexto() {
    let textEncriptado = document.getElementById('textoUsuario');
    let texto = textEncriptado.value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    asignartextoelemento('h1', textoDesencriptado)
    limpiarCaja();
}

function limpiarCaja() {
    document.getElementById('Contenedor').value = '';
}


