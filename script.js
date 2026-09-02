function upDate(previewPic) {
    console.log("Evento disparado al pasar el ratón");
    console.log("Texto alt:", previewPic.alt);
    console.log("Ruta de imagen:", previewPic.src);

    let display = document.getElementById("image");
    display.innerHTML = previewPic.alt;
    display.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    let display = document.getElementById("image");
    display.style.backgroundImage = "url('')";
    display.innerHTML = "Pase el ratón por encima de una imagen para mostrarla aquí";
}
