/*
1-La letra "e" es convertida para "enter"
3-La letra "i" es convertida para "imes"
4-La letra "a" es convertida para "ai"
2-La letra "o" es convertida para "ober"
5-La letra "u" es convertida para "ufat"
*/
function encriptar() {
    //Obtiene el texto desenriptado y trata de encriptarlo
    var texto = document.getElementById("imputTexto").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm, "enter")
    var txtcifrado = txtcifrado.replace(/o/igm, "ober")
    var txtcifrado = txtcifrado.replace(/i/igm, "imes")
    var txtcifrado = txtcifrado.replace(/a/igm, "ai")
    var txtcifrado = txtcifrado.replace(/u/igm, "ufat")
    //desaparecer imagen y texto de la derecha 
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    //aparecer resultado
    document.getElementById("texto2").innerHTML = txtcifrado;
    //ocultar y aparecer boton copiar
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    //Obtiene el texto enriptado y trata de desencriptarlo
    var texto = document.getElementById("imputTexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm, "e")
    var txtcifrado = txtcifrado.replace(/ober/igm, "o")
    var txtcifrado = txtcifrado.replace(/imes/igm, "i")
    var txtcifrado = txtcifrado.replace(/ai/igm, "a")
    var txtcifrado = txtcifrado.replace(/ufat/igm, "u")
    //desaparecer imagen y texto de la derecha 
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    //aparecer resultado
    document.getElementById("texto2").innerHTML = txtcifrado;
    //ocultar y aparecer boton copiar
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
//Funcion copiar texto
function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand('copy');
    alert("texto copiado");
}