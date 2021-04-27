var teclas= { UP:38, DOWN:40, LEFT:37 , RIGHT:39 };
var canvas = document.getElementById("canvas");
var papel = canvas.getContext("2d");
function activar(url,carga){
        this.Url=url;
        this.Carga = carga;
  }
  var perro = new activar("perro.png",false);
  perro.imagen = new Image();
  perro.imagen.src = perro.Url;
  perro.imagen.addEventListener("load" , dibujarperro);
        function dibujarperro(){
        perro.Carga= true;
        dibujar() };
  var fondo = new activar("fondo.png",false);
  fondo.imagen = new Image();
  fondo.imagen.src = fondo.Url;
  fondo.imagen.addEventListener("load" , dibujarfondo);
 function dibujarfondo(){
  fondo.Carga= true;
  dibujar() };
  var cerdo = new activar("cerdo.png",false);
  cerdo.imagen = new Image();
  cerdo.imagen.src = cerdo.Url;
  cerdo.imagen.addEventListener("load" , dibujarcerdo);
  function dibujarcerdo(){
     cerdo.Carga= true;
     dibujar()};


   function dibujar(){
     if (fondo.Carga){
     papel.drawImage(fondo.imagen,0,0); }
     if (perro.Carga){
         papel.drawImage(perro.imagen,150,150); }
      if (cerdo.Carga){
        var x1= aleatorio(0,480);
          var y1= aleatorio(0,480);
        papel.drawImage(cerdo.imagen,x1,y1); }
 }
        var distancia= 30 , x =150, y =150 ;


        document.addEventListener("keydown",mover);




function mover (evento){ //compara la tecla oprimida con los keycode o claves de las teclas
  switch(evento.keyCode)
  {
        case teclas.UP:
        papel.drawImage(fondo.imagen,0 ,0);
        var x1= aleatorio(0,480);
          var y1= aleatorio(0,480);
        papel.drawImage(cerdo.imagen,x1,y1);

        papel.drawImage(perro.imagen,x ,y- distancia);
        y= y-distancia ;
        break;
        case teclas.DOWN:
        papel.drawImage(fondo.imagen,0 ,0);
        var x1= aleatorio(0,480);
          var y1= aleatorio(0,480);
        papel.drawImage(cerdo.imagen,x1,y1);
        papel.drawImage(perro.imagen,x ,y+ distancia);
        y= y+distancia ;
        break;
        case teclas.LEFT:
        papel.drawImage(fondo.imagen,0 ,0);
        var x1= aleatorio(0,480);
          var y1= aleatorio(0,480);
        papel.drawImage(cerdo.imagen,x1,y1);
        papel.drawImage(perro.imagen,x-distancia ,y);
        x= x-distancia ;
        break;
        case teclas.RIGHT:
        papel.drawImage(fondo.imagen,0 ,0);
        var x1= aleatorio(0,480);
          var y1= aleatorio(0,480);
        papel.drawImage(cerdo.imagen,x1,y1);
        papel.drawImage(perro.imagen,x+distancia ,y);
        x= x+distancia ;
        break;

    }
  }
  function aleatorio(min, max){
  var resultado = Math.floor(Math.random()*((max-min)+1))+min ;
  return resultado ;
  }
