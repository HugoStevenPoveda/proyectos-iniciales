var teclas= { UP:38, DOWN:40, LEFT:37 , RIGHT:39 };
var d = document.getElementById("area_dibujo");
var lienzo = d.getContext("2d");
var x =150;
var y =150;

//console.log(x);
//console.log(i);
function Dibulinea(color,x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.lineWidth = 2.5 ;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final , y_final);
  lienzo.stroke();
  lienzo.closePath();
}

Dibulinea("black",0,0,0,300);
  Dibulinea("black",0,0,300,0);
  Dibulinea("black",300,300,300,0);
    Dibulinea("black",300,300,0,300);
    Dibulinea("red",148,148,152,152);

document.addEventListener("keydown",dibujarTeclado);

function dibujarTeclado(evento)
{
  var colorcito = "green";
  var mover = 10;

          switch(evento.keyCode)
            {
                case teclas.UP:
                console.log("arriba");

                Dibulinea(colorcito,x,y,x,y-mover);
                y=y - mover;
                break;
                case teclas.DOWN:
                console.log("Abajo");
                Dibulinea(colorcito,x,y,x,y+mover);
                y=y + mover;

                break;
                case teclas.LEFT:
               console.log("Izquierda");
               Dibulinea(colorcito,x,y,x-mover,y);
               x=x - mover;
                break;
                case teclas.RIGHT:
                console.log("derecha");
                Dibulinea(colorcito,x,y,x+mover,y);
                x=x + mover;
                break;
                default:
                console.log("lo sentimos ");
                break;
            }


}
