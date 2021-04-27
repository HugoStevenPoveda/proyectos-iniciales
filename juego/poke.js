class pokemon{
constructor(nombre , tipo, poder){
this.imagen= new Image();
this.nombre=nombre;
this.tipo=tipo;
this.poder=poder;
this.imagen.src=imagenes[this.nombre];

}
hablar(){
alert(this.nombre);}
mostrar(){
  document.write("<hr>");
  document.write("<p>");
  document.write("<strong> Nombre :"+ this.nombre + "</strong> <br>");
  document.write("<strong> Tipo: "+ this.tipo + "</strong> <br>");
  document.write("<strong> Poder: "+this.poder + "</strong> <br>");
  document.body.appendChild(this.imagen);
  document.write("</p>")
  document.write("<hr>");
}
}
