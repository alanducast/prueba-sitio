let miImage = document.querySelector('img');

miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/nfl-logo.png') {
        miImage.setAttribute('src', 'images/nba-logo.png');
    } else {
        miImage.setAttribute('src', 'images/nfl-logo.png');
    }
}

// LA función anterior es equivalente a la siguiente pero no guarda el objeto en una variable lo que no hace que para esta función sea eficiente
/* 
document.querySelector('img').onclick = function () {
    let miSrc = document.querySelector('img').getAttribute('src');
    if (miSrc === 'images/nfl-logo.png') {
        document.querySelector('img').setAttribute('src', 'images/nba-logo.png');
    } else {
        document.querySelector('img').setAttribute('src', 'images/nfl-logo.png');
    }
}
*/

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}