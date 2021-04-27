
var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");

function elipse(x1,y1,fx,fy,color) {
  lienzo.beginPath()
  lienzo.lineWidth = 2 ;
  lienzo.strokeStyle = "#000";
  lienzo.ellipse(x1,y1,fx,fy,0,0,2*Math.PI,true);
  lienzo.fillStyle = color;
  lienzo.fill( );
  lienzo.stroke();
lienzo.closePath();}


    elipse(250,250,200,200,"#fff");
    elipse(150,150,20,40,"#f00");
  elipse(350,150,20,40,"#f00");
  elipse(250,250,20,65,"#0f0");
  elipse(250,360,100,20,"#000");
  for(var angulo = 0 ; angulo<=36 ;angulo++){
    var x = 210*Math.cos(angulo*Math.PI/18)+250;
    var y = 250-210*Math.sin(angulo*Math.PI/18) ;
    var color = parseInt(255-(8*angulo));
    elipse(x,y,10,10,"#"+ color+ color+color);
  }





/*var lienzo = document.getElementById("canvas");
		if (lienzo && lienzo.getContext) {
		var contexto = lienzo.getContext("2d");
			if (contexto) {
				 // var cw = lienzo.width;
					//var ch = lienzo.height;
					contexto.lineWidth = 5;
		            contexto.strokeStyle = "#00ff";
				    //var centroX = cw/2, centroY = ch/2, radioX = 100, radioY = 60, rotacion=0, ap = 0, af = 2*Math.PI, cR = true;

             //contexto.ellipse(centroX, centroY, radioX, radioY, rotacion, ap, af, cR);
                 contexto.ellipse(250,250,100,50,0,0,2*Math.PI,true);
          contexto.stroke();
				}
		}*/
