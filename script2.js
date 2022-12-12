// esto seria en CSS, para compararlo con js
// h1{color: red}
// .parrafito {....}
// #pid{.....}

const h1 = document.querySelector('h1');
const p = document.querySelector(`p`);
const parrafito = document.getElementsByClassName(`parrafito`);
const pid = document.getElementById(`pid`);
const input = document.querySelector(`input`);

console.log(h1);

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
}
)

h1.innerHTML = `Patito <br> Feo`; // modifica el h1 y permite añadir texto y codigo
h1.innerText = `Patito <br> Feo`; // modifica el h1 y solo añade texto

//console.log(h1.getAttribute(`class`));
//h1.setAttribute(`class`, `rojo`);

h1.classList.add(`rojo`);
h1.classList.remove(`verde`);

input.value = `456`;

const img = document.createElement(`img`);
img.setAttribute(`src`, `https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Whatsapp_logo_svg.png/600px-Whatsapp_logo_svg.png`);

console.log(img);

// borrar el texto de pid, y lo reemplaza por una imagen
pid.innerHTML = "";
pid.appendChild(img);