//crear elemento
const imagen = document.createElement("img");
console.log(imagen);


//modificar los atributos html del elemento
imagen.src = 'https://placeimg.com/200/200/animals';
imagen.alt = 'Imagenes aleatorias de animales';


//lo insertamos en un elemento padre (se cambió la poscion de la imagen con afeter begin)(afterend lo añade fuera dle body) (beforebigin entre head y body)(before end antes de que acabe body)
//LO MAS COMUN ES APPENDCHILD
//document.body.appendChild(imagen);
//document.body.insertAdjacentElement("afterbegin", imagen);
//document.body.insertAdjacentElement("afterend", imagen);
//document.body.insertAdjacentElement("beforebegin", imagen);
document.body.insertAdjacentElement("beforeend", imagen);


//forma correcta de insertar un elemento
//primer paso: crear al elemeto padre (elemento que contiene la imagen)
//segundo: seleccionar el elemento padre

const padreImg = document.getElementById('padreImg');

//3 crear el elmento
const imagen2 = document.createElement('img');

//4 modificamos los atributos del elemento
imagen2.src = 'https://placeimg.com/200/200/nature';
imagen2.alt = "Imagenes de naturaleza";

//5 insertar elemento
padreImg.appendChild(imagen2);





//utilizar forEach par pintar datos
const frutas = ["Toronja", "Manzana", "Mandarina", "Limón", "Granada", "Melón", "Plátano", "Guayaba"];

const listaFrutas = document.getElementById('frutas');



//forma 1 de hacer la lista:
frutas.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element
    listaFrutas.appendChild(li);
})




//forma 2: 
frutas.forEach((el) => {
    listaFrutas.innerHTML += `<li>${el}</li>`
});
