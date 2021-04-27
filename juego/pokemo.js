var imagenes=[];
imagenes["Perro"]="pokemones/Perro.png";
imagenes["Agua"]="pokemones/Agua.png";
imagenes["Pika"]="pokemones/Pika.png";
imagenes["Neto"]="pokemones/Neto.png";


 var Perro = new pokemon("Perro", "tierra", 80);
 var Agua = new pokemon("Agua", "acuatico", 60);
 var Neto= new pokemon("Neto", "psique", 92);
 var Pika = new pokemon("Pika", "electrico", 82);
 var colecciones=[];
 colecciones.push(Perro);
 colecciones.push(Agua);
 colecciones.push(Neto);
 colecciones.push(Pika);
for ( var p of colecciones){
//colecciones[p].mostrar();
p.mostrar();
}
