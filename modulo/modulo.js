var numero_cantida = parseInt(prompt("digite su numero"));
var cantida3=0 , cantida5=0 , cantida=0 ;
 for (var i = 1 ; i<=numero_cantida;i++){
   var modulo3 = i%3 ;
   var modulo5 = i%5 ;
   var m3= false;
   var m5= false;
   var valor ="  ";
   if (modulo3==0){
        valor ="fizz";
         m3= true ;
         cantida3++;
         }
   if (modulo5==0){
        valor ="buzz";
        m5= true ;
       cantida5++; }
    if ( m3==true && m5==true ){
        valor ="Fizz y Buzz";
          cantida++;}
document.write("numero  " + i + "<strong>  " +valor+ "</strong> <br>");
}
document.write("en lo primeros <strong> "+numero_cantida+ "  </strong>numeros <br>");
document.write("hay <strong>"+ cantida3+" </strong> multiplos de 3 <br>");
document.write("hay <strong>"+ cantida5+" </strong> multiplos de 5 <br>");
document.write("hay <strong>"+ cantida+"  </strong> multiplos de 3 y 5 <br>");
