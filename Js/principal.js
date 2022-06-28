const list = document.querySelectorAll(".list");

let descripcion = document.querySelectorAll(".sinopsisMostrar");

const btnSwitch = document.querySelector("#switch");

let menuDesplegar = document.querySelector(".menu");
let menuContenedor = document.querySelector(".navigation");

// loader
window.onload = () => {
    let contenedor = document.querySelector(".loader_container");

    contenedor.style.display = "none";
}
function activeLink() {
    list.forEach((item) =>
        item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) =>
    item.addEventListener("click", activeLink));

//mostrar sinopsis al dar click

function mostrarSinopsis() {
    descripcion.forEach(() =>
        this.classList.toggle("active"));
}
descripcion.forEach((texto) =>
    texto.addEventListener("click", mostrarSinopsis));

//animacion Slider

//modo oscuro y claro
let btnSwitch = document.querySelector(".switch");

btnSwitch.addEventListener('click', () => {

    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    btnSwitch.classList.toggle('active');

    if (document.body.classList.contains('light')) {
        localStorage.setItem('lightMode', 'true');
    } else {
        localStorage.setItem('lightMode', 'false');
    }

});

if (localStorage.getItem('lightMode') === 'true') {

    document.body.classList.add('light');
    btnSwitch.classList.add('active');
    document.body.classList.remove('dark');

} else {
    document.body.classList.remove('light');
    btnSwitch.classList.remove('active');
    document.body.classList.add('dark');
}

//desplegar menu lateral

function mostrarMenu() {
    menuDesplegar.classList.toggle("desplegar");
    menuContenedor.classList.toggle("menuDesplegado")
}
menuDesplegar.addEventListener("click", mostrarMenu);
