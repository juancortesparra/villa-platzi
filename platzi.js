var vp = document.getElementById("villa-platzi");
var papel = vp.getContext("2d");

var botoncito_empezar =
document.getElementById("boton_empezar");

var textito_velocidad =
document.getElementById("texto_velocidad");

var botoncito_velocidad =
document.getElementById("boton_velocidad");

var escuchar_teclado =
document.addEventListener("keydown", moverCerdo);

// Draw the cerdo in the middle, add opcion to change the speed//

botoncito_velocidad.addEventListener("click", cambiarVel)
boton_empezar.addEventListener("click", empezarCerdo);

var avanza = 5
function cambiarVel()
{
avanza = Math.ceil(texto_velocidad.value/5);
consoole.log(avanza);
}
function empezarCerdo ()
{
  papel.drawImage(cerdo, imagen, 150, 150)
}

// Create collection and variables//

var fondo = {
  url: "tile.png",
  cargarOK: false
}
var pollo = {
  url: "pollo.png",
  cargarOK: false
};

var vaca = {
  url: "vaca.png",
  cargarOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargarOK: false
}

//Create new variables inside the collections, add; imagens, rutas, and load events//

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

pollo.imagen = new Image ();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

// Create functions to ejecute by load events//

function cargarFondo()
{
  fondo.cargarOK = true;
  dibujar ();
}
function cargarPollos()
{
  pollo.cargarOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargarOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargarOK = true;
  dibujar();
}
//code to move pig//
//this variables is to save the last position generate//
var vx1=-1;
var vy1=-1;
var vx2=-1;
var vy2=-1;
var vx3=-1;
var vy3=-1;

var px1=-1;
var py1=-1;
var px2=-1;
var py2=-1;
var px3=-1;
var py3=-1;
// collection of variables to be more orgonaize//
var teclas_entrantes = {

  FLECHA_ARRIBA: 38,
  FLECHA_ABAJO: 40,
  FLECHA_IZQUIERDA:  37,
  FLECHA_DERECHA: 39
};

// to know where the pig appear at the first time you press a key//
var mov_x = 170;
var mov_y = 170;

//this function ejecute when you press any key//
function moverCerdo(evento)
{
  if(0> mov_x)
  {
    mov_x = 0;
    dibujar();
    dibujarCerdo(mov_x,mov_y);
    console.log(mov_x);
  }
  if (mov_x = vp.width-80)
  {
    mov_x = vp.width-80;
      dibujar();
      dibujarCerdo(mov_x,mov_y);
      console.log(mov_x);
  }
  if(0 > mov_y)
  {
    mov_y = 0;
    dibujar();
    dibujarCerdo(mov_x,mov_y);
    console.log(mov_y);
  }
 if (mov_y >= vp.width-70)
   {
      mov_y = vp.width-70;
      dibujar();
      dibujarCerdo(mov_x,vp.width-70);
      console.log(mov_y);
   }

    switch (evento.keyCode)
    {

      case teclas_entrantes.FLECHA_ARRIBA:
        dibujar()
        dibujarCerdo(mov_x, mov_y - avanza);
         mov_y = mov_y - avanza;

        break;

            case teclas_entrantes.FLECHA_ABAJO:
              dibujar();
              dibujarCerdo(mov_x, mov_y + avanza);
              mov_y = mov_y + avanza;

            break;

            case teclas_entrantes.FLECHA_IZQUIERDA:
              dibujar();
              dibujarCerdo(mov_x - avanza, mov_y);
              mov_x = mov_x - avanza;

            break;

            case teclas_entrantes.FLECHA_DERECHA:
              dibujar();
              dibujarCerdo(mov_x + avanza, mov_y);
              mov_x = mov_x + avanza;

         break;
      }

}
function dibujarCerdo(xx,yy)
{
    papel.drawImage(cerdo.imagen, xx, yy)
}

function dibujar()
{
  if(fondo.cargarOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
 if(vaca.cargarOK)
 {
   if(vx1==-1)
   {
     vx1 = aleatorio(0,420);
     vy1 = aleatorio(0,420);
     vx2 = aleatorio(0,420);
     vy2 = aleatorio(0,420);
     vx3 = aleatorio(0,420);
     vy3 = aleatorio(0,420);
   }
   papel.drawImage(vaca.imagen, vx1, vy1);
   papel.drawImage(vaca.imagen, vx2,  vy2);
   papel.drawImage(vaca.imagen, vx3, vy3);
   }
   if (pollo.cargarOK)
   {
     if(px1==-1)

   {
     px1 = aleatorio(0,420);
       py1 = aleatorio(0,420);
       px2 = aleatorio(0,420);
       py2 = aleatorio(0,420);
       px3 = aleatorio(0,420);
       py3 = aleatorio(0,420);
    }
    papel.drawImage(pollo.imagen, px1, py1);
    papel.drawImage(pollo.imagen, px2, py2);
    papel.drawImage(pollo.imagen, px3, py3);
 }

}
// esto pertenece a un ejemplo //

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado
}
