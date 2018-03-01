var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton1");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext('2d');

function dibujoPorClick()
{
	var lineas = parseInt(texto.value);
	var l = 0;
	var yi, xf;
	var espacio = ancho / lineas;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

for(l = 0; l < lineas; l++)
{
	yi = espacio * l;
	xf = espacio * (l + 1);
	dibujarLinea("blue",0,yi,xf,300);
}
	dibujarLinea("blue", 1,1,1,300);
	dibujarLinea("blue", 1,299,299,299);
}