//console.log(document.URL);
//console.log(document.ATTRIBUTE_NODE);
//console.log(document.COMMENT_NODE);

//getElementById()

console.log(document.getElementById('parrafo1'))

console.log(document.getElementById('parrafo1').textContent)

const parrafo1 = document.getElementById('parrafo1');

console.log(parrafo1)
console.log(parrafo1.textContent);

//hay personas que usan $ antes del nombre de la variabla que contienen elementos del html. Puede ser confuso

const $parrafo1 = document.getElementById('parrafo1');


//para reemplazar el texto or una cadena de texto vacia (si entre las comillas no escribimos nada)
parrafo1.textContent = "Hola desde el parrafo 1";


console.log(parrafo1.textContent);

//muestra los estilos del css:
console.log(parrafo1.style);


parrafo1.style.color='red';
parrafo1.style.backgroundColor = "yellow";


//querySelector()
//para etiqueta = p
//para clase con punto= .parrafo
//para id= #parrafo1


const parrafo2= document.querySelector('.parrafo');
console.log(parrafo2.textContent);


//cambia el tecto del parrafo:
parrafo2.textContent = "Modificando el contenido desde JavaScript "


//suma el texto
parrafo2.textContent += "\n Modificando el contenido desde JavaScript "


//\n --inserta un salto de linea ===<br>
//\t



//querySelectorAll() //los guarda en lista de nodos (nodelist)

const parrafos = document.querySelectorAll('p');
console.log(parrafos);
console.log(parrafos.length);
console.log(parrafos[2]);

parrafos[2].style.fontSize = "2rem";



//css usa un guion para los espacios font-size
//JS usa camelCase. En este caso se utilza lower camel case para llamarlas sin modificarlas



//Modificar los atributos de html
const enlace= document.getElementById('enlace');
console.log(enlace.href);



//podemos llamar a los atributos de html
enlace.href = 'https//www.youtube.com/';
enlace.taget = "_blank";
enlace.textContent = 'Enlace de Youtube';




//ejercicio
console.log(parrafo2.style);


parrafo2.style.color='white';
parrafo2.style.backgroundColor = "black";
parrafo2.style.fontSize = "40px";




//reemplazar contenido
//nodename es para mostrar el nombre del nodo
const parrafo4 = document.getElementById('parrafo4');
console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
//innerHTMLmuestra el html que haya en el interior del documento:
console.log(parrafo4.innerHTML);
console.log(document.body.innerHTML);


//outerhtml muestra el contenido html incluyendo al elemento
console.log(parrafo4.outerHTML);



//ejemplo
parrafo4.textContent = '<a href="http://google.com">Enlace</a>';



//inner html permite insertar y por lo tanto reemplazar el contenido: Reemplaza el contenido del elemento
//parrafo4.innerHTML = '<a href="http://google.com">Enlace</a>';



//outer. Reemplaza el elemento completo
//parrafo4.outerHTML = '<a href="http://google.com">Enlace</a>';


//inner permite que se representencorrectmente las etiquetas de html
//parrafo4.innerHTML = '<div class="elemento">Este es un div</div>';



//outer html 
parrafo4.outerHTML = '<div class="elemento">Este es un div</div>';


///uno reemplaza el elemento, el otro lo deja seguir viviendo, solo le cambia lo de adentro


//JS perite modificar las clases css
//utilizando style
//classlist permite acceder a las clases
console.log(parrafo4.classList.contains("elemento"));
parrafo4.classList

//para añadir una clase .add
parrafo4.classList.add('elemento');


//ejemplo
const cambiarColor = () => {
    parrafo4.classList.add('elemento');
}

cambiarColor()

//toggle: si esta presente la clase la quita, si no esta, la agrega



const cambiarColor2 = () => {
    parrafo4.classList.toggle('elemento');
}

cambiarColor2();//se agrega la clase (porque no la tiene)
cambiarColor2();// se quita la clase (que ahora ya tiene)





