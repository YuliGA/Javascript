var xi;
var yi;
var estado = true;
var colorlinea = "blue";
var espacio = document.getElementById("area_de_dibujo");
var papel = espacio.getContext("2d");

document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", moverMouse);

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
 	if (estado = true);
 	{
 		dibujarLinea(colorlinea,xi,yi,evento.layerX, evento.layerY, papel);
 		xi = evento.layerX;
 		yi = evento.layerY;
 	}
}

function moverMouse(evento)
{
	estado = true;
	dibujarLinea(colorlinea, xi, yi, evento.layerX, evento.layerY, papel);
 	xi = evento.layerX;
 	yi = evento.layerY;		
}

function soltarMouse(evento)
{
	estado = false;
	xi = event.offsetX;
	yi = event.offsetY;
}