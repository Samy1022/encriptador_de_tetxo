
function asignartextoelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function EncriptarTexto() {
    let textarea = document.getElementById('textoUsuario');
    let texto = textarea.value;
    let textoEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Asignar el texto encriptado al elemento <h1>
    asignartextoelemento('h1', textoEncriptado);
    eliminarContenidoCaja();
    document.getElementById('boton__copiar').removeAttribute('disabled');
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
    eliminarContenidoCaja();
    document.getElementById('boton__copiar').removeAttribute('disabled');
}

function eliminarContenidoCaja() {


    let contenedor = document.getElementById("caja");

    // Seleccionar todos los hijos del contenedor, excepto los <h1>
    let hijos = contenedor.children;

    // Convertir a un array para poder recorrerlo y eliminar elementos
    for (let i = hijos.length - 1; i >= 0; i--) {
        if (hijos[i].tagName !== "H1") {
            contenedor.removeChild(hijos[i]);
        }
    }

}

function copiarTexto() {
    let contenedor = document.getElementById("caja");
    let textoParaCopiar = contenedor.querySelector("h1").textContent;

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textoParaCopiar);
}


