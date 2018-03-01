var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
	url: "tile.png",
	cargaOk: false
};

var pollo = {
	url: "pollo.png",
	cargaOk: false
};
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
};
var x = 50;
var y = 20;

document.addEventListener("keydown", moverPollo)

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo()
{
	fondo.cargaOk = true;
	dibujar();
}

function cargarPollo()
{
	pollo.cargaOk = true;
	dibujar();
}

function dibujar()
{
	if(fondo.cargaOk)
	{
		papel.drawImage(fondo.imagen, 0, 0);		
	}
}
{
	if(pollo.cargaOk)
	{
		papel.drawImage(pollo.imagen, x, y);		
	}
}

function moverPollo(evento)
{
	var movimiento = 30;
	switch(evento.keyCode)
	{
		case teclas.UP:
			papel.drawImage(pollo.imagen, x, y - movimiento);
			y = y - movimiento;
		break;
		case teclas.DOWN:
			papel.drawImage(pollo.imagen, x, y + movimiento);
			y = y + movimiento;			
		break;
		case teclas.LEFT:
			papel.drawImage(pollo.imagen, x - movimiento, y);
			x = x - movimiento;
		break;
		case teclas.RIGHT:
			papel.drawImage(pollo.imagen, x + movimiento, y);
			x = x + movimiento;
		break;
	}
}