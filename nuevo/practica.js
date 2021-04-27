var texto = document.getElementById("texto");
var bonton = document.getElementById("boto");

function uno (e){
alert("este evento(o accion ) es de tipo   "+ e.type);
}
texto.addEventListener("onselect",uno);
