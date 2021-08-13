///// Trayendo información de película a otra página

let x = document.createElement("DIV");
let y =document.createElement("DIV");
let z =document.createElement("DIV");  

// nombre película desde localStorage;
x.innerHTML = localStorage.getItem("nombreFilme");
document.body.appendChild(x);
x.setAttribute("class","informacionFilm");

// año película desde localStorage;
y.innerHTML = localStorage.getItem("añoFilme");
x.appendChild(y);
y.setAttribute("class","informacionFilm");

// descripción película desde localStorage;
z.innerHTML = localStorage.getItem("descripcionFilme");
x.appendChild(z);
z.setAttribute("class","informacionFilm");