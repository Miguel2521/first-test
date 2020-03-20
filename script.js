var color1 = document.getElementById("colorone");
var color2 = document.getElementById("colordos");
var fondo = document.getElementById("bodytag");

function cambiarfondo() {
    console.log(color1.value)
    console.log(color2.value)
    var nuevofondo = "linear-gradient(" + color1.value + "," + color2.value + ")"
    console.log(nuevofondo)
    fondo.style.background = nuevofondo;
    fondo.style.backgroundAttachment = "fixed";
    nuevoboton = document.createElement("h3");
    nuevoboton.innerHTML = fondo.style.background + ";"
    fondo.appendChild(nuevoboton);

};

color1.addEventListener("input", cambiarfondo);
color2.addEventListener("input", cambiarfondo);