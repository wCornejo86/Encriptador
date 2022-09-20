const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none";

//   `La letra "e" es convertida para "enter"`
//   `La letra "i" es convertida para "imes"`
//  `La letra "a" es convertida para "ai"`
//   `La letra "o" es convertida para "ober"`
//   `La letra "u" es convertida para "ufat"`

// Encriptar mensaje

function btnEncriptar() {
    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    btnCopy.style.display = "block";
}


function encriptar(stringEncriptado) {
    // matriz dentro de otra matriz
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        // metodo includes de js

        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            //metodo replaces all de js

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

// Desencriptar mensaje

function btnDesencrpitar() {
    const TextoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    inputTexto.value = "";
}

function desencriptar(stringDesencriptada) {
    // matriz dentro de otra matriz
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        // metodo includes de js

        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            //metodo replaces all de js

            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");
}

