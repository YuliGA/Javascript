var d = document.getElementById('dibujito');
var lienzo = d.getContext('2d');
var lineas = 30;
var l = 0;
var yi, xf;

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
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea("blue",0,yi,xf,300);
}

dibujarLinea("green", 1,1,1,300);
dibujarLinea("green", 1,299,299,299);