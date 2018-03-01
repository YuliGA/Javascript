var xi;
var yi;
var xf;
var yf;
var espacio = document.getElementById("area_de_dibujo");
var papel = espacio.getContext("2d");

document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();						//Inicia el trazo
	lienzo.strokeStyle = color;				//Estilo del trazo
	lienzo.lineWidth = 3;					//Ancho de la linea
	lienzo.moveTo(xinicial,yinicial);		//Donde comienza la linea
	lienzo.lineTo(xfinal,yfinal);			//Traza la linea (Ubica punto final)
	lienzo.stroke();						//Dibuja con el estilo definido
	lienzo.closePath();						//Cierra el trazo
}

function presionarMouse(evento)				
{
 	var colorlinea = "blue";
 	xi = event.offsetX;
	yi = event.offsetY;
}

function soltarMouse(evento)
{
	var colorlinea = "blue"
	xf = event.offsetX;
	yf = event.offsetY;
	dibujarLinea(colorlinea,xi,yi,xf,yf,papel);
}