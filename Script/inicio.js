let peliculas = new Array();

peliculas = [
  {
    nombre: "Capitán América",
    año: "2011",
    descripcion:
      "El Capitán América, cuyo nombre real es Steven (Steve) Grant Rogers, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics.",
  },
  {
    nombre: "El Hobbit",
    año: "2012",
    descripcion:
      "Bilbo Bolsón lleva una vida sencilla con sus compañeros hobbits en la comarca, hasta que el mago Gandalf llega y lo convence de unirse a un grupo de enanos para recuperar el reino de Erebor.",
  },
  {
    nombre: "Moana",
    año: "2016",
    descripcion:
      "Vaiana, una adolescente de las islas del sur del Pacífico, atraviesa el océano y explora el mundo para demostrar que es tan valiente como el resto de su familia. En su periplo se encontrará con Maui, quien en el pasado fue un semidios poderoso.",
  },
  {
    nombre: "Son como niños 2",
    año: "2013",
    descripcion:
      "Tres años después de la reunión que volvió a unirlo a sus amigos de la infancia, Lenny Feder regresa junto a su familia a su pueblo natal para poder estar más cerca de sus amigos.",
  },
  {
    nombre: "Soul",
    año: "2020",
    descripcion:
      "Un profesor de música que ha perdido la pasión se transporta fuera de su cuerpo al 'Gran Antes' y debe encontrar el camino de regreso con la ayuda de un alma infantil que aprende sobre sí misma.",
  },
  {
    nombre: "¿Qué pasó ayer?",
    año: "2009",
    descripcion:
      "Dos días antes de su boda, Doug y tres amigos viajan a Las Vegas para una fiesta inolvidable y salvaje. De hecho, cuando los tres acompañantes despiertan la mañana siguiente, no recuerdan nada ni encuentran a Doug. Con poco tiempo por delante, los tres amigos intentan recordar sus pasos y encontrar a Doug para que regrese a Los Ángeles para su boda.",
  },
  {
    nombre: "Misión Rescate",
    año: "2015",
    descripcion:
      "Durante una misión a Marte de la nave tripulada Ares III, una fuerte tormenta se desata, por lo que, tras haber dado por desaparecido y muerto al astronauta Mark Watney (Matt Damon), sus compañeros toman la decisión de irse; sin embargo, ha sobrevivido, pero está solo y con pocos recursos en el planeta.",
  },
];

/////////////////////////////// Slider de películas!!

document.getElementById("slider").addEventListener("load", Rotador());
function Rotador() {
  var imgArray = new Array();

  imgArray[0] = new Image();
  imgArray[0] =
    "https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/05/hipertextual-avengers-endgame-futuro-capitan-america-2019781893-scaled.jpg?w=1560&ssl=1";

  imgArray[1] = new Image();
  imgArray[1] =
    "https://eloutput.com/app/uploads-eloutput.com/2020/12/Nuevas-ediciones-ESDLA-Hobbit.jpg";

  imgArray[2] = new Image();
  imgArray[2] =
    "http://cdn3.upsocl.com/wp-content/uploads/2020/03/portada-moana-1024x533.jpg";

  imgArray[3] = new Image();
  imgArray[3] =
    "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/60/e7/36/60e73649-e85a-a0d3-ce4d-98ea6296869a/contsched.wkxbcpsp.png/1000x563.jpg";

  imgArray[4] = new Image();
  imgArray[4] =
    "https://blog.jefsescritor.com/wp-content/uploads/2021/02/soul-pixar.jpeg";

  imgArray[5] = new Image();
  imgArray[5] =
    "https://i1.wp.com/frasesdelapelicula.com/wp-content/uploads/2010/08/que-paso-ayer.jpg?resize=1005%2C528&ssl=1";

  imgArray[6] = new Image();
  imgArray[6] =
    "https://cdn.aarp.net/content/dam/aarp/entertainment/movies-for-grownups/2015-09/1140-MFG-the-martian-ESP.imgcache.rev.web.700.403.jpg";

  var indiceImagenes = 0;

  function Slider() {
    document.slider.src = imgArray[indiceImagenes];

    if (indiceImagenes < 6) {
      indiceImagenes = indiceImagenes + 1;
    } else {
      indiceImagenes = 0;
    }
  }

  setInterval(Slider, 3000);
}

/////////////////////////////// Captura y proyección información películas.

var pelicula1 = document.getElementById("contenedorPeli1");
pelicula1.addEventListener("click", function () {
  let nombreFilm = peliculas[0].nombre;
  let añoFilm = peliculas[0].año;
  let descripcionFilm = peliculas[0].descripcion;

  localStorage.nombreFilme = nombreFilm;
  localStorage.añoFilme = añoFilm;
  localStorage.descripcionFilme = descripcionFilm;

  window.open("descripcionPeli.html");
});

var pelicula2 = document.getElementById("contenedorPeli2");
pelicula2.addEventListener("click", function () {
  let nombreFilm = peliculas[1].nombre;
  let añoFilm = peliculas[1].año;
  let descripcionFilm = peliculas[1].descripcion;

  localStorage.nombreFilme = nombreFilm;
  localStorage.añoFilme = añoFilm;
  localStorage.descripcionFilme = descripcionFilm;

  window.open("descripcionPeli.html");
});

var pelicula3 = document.getElementById("contenedorPeli3");
pelicula3.addEventListener("click", function () {
  let nombreFilm = peliculas[2].nombre;
  let añoFilm = peliculas[2].año;
  let descripcionFilm = peliculas[2].descripcion;

  localStorage.nombreFilme = nombreFilm;
  localStorage.añoFilme = añoFilm;
  localStorage.descripcionFilme = descripcionFilm;

  window.open("descripcionPeli.html");
});

var pelicula4 = document.getElementById("contenedorPeli4");
pelicula4.addEventListener("click", function () {
  let nombreFilm = peliculas[3].nombre;
  let añoFilm = peliculas[3].año;
  let descripcionFilm = peliculas[3].descripcion;

  localStorage.nombreFilme = nombreFilm;
  localStorage.añoFilme = añoFilm;
  localStorage.descripcionFilme = descripcionFilm;

  window.open("descripcionPeli.html");
});

var pelicula5 = document.getElementById("contenedorPeli5");
pelicula5.addEventListener("click", function () {
  let nombreFilm = peliculas[4].nombre;
  let añoFilm = peliculas[4].año;
  let descripcionFilm = peliculas[4].descripcion;

  localStorage.nombreFilme = nombreFilm;
  localStorage.añoFilme = añoFilm;
  localStorage.descripcionFilme = descripcionFilm;

  window.open("descripcionPeli.html");
});

var pelicula6 = document.getElementById("contenedorPeli6");
pelicula6.addEventListener("click", function () {
  let nombreFilm = peliculas[5].nombre;
  let añoFilm = peliculas[5].año;
  let descripcionFilm = peliculas[5].descripcion;

  localStorage.nombreFilme = nombreFilm;
  localStorage.añoFilme = añoFilm;
  localStorage.descripcionFilme = descripcionFilm;

  window.open("descripcionPeli.html");
});

var pelicula7 = document.getElementById("contenedorPeli7");
pelicula7.addEventListener("click", function () {
  let nombreFilm = peliculas[6].nombre;
  let añoFilm = peliculas[6].año;
  let descripcionFilm = peliculas[6].descripcion;

  localStorage.nombreFilme = nombreFilm;
  localStorage.añoFilme = añoFilm;
  localStorage.descripcionFilme = descripcionFilm;

  window.open("descripcionPeli.html");
});

//////////////////////////////////
