var d = document.getElementById('Dibujo');
var lienzo = d.getContext("2d");
var xi = 0;
var yf = 10;
var lineas = 40;
var l = 0;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

do
{
	l = l + 1;
	xi = xi + 10;
	yf = yf + 10;
	dibujarLinea("blue",xi,0,400,yf);
}
while (l < lineas);
