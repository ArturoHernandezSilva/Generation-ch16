`use strict`

//URLs para consumir
//datos.message regresa el link para ver la imagen del perro

const urlAleatorios = "https://dog.ceo/api/breeds/image/random"



//Elementos del DOM
const imagenPerrito = document.getElementById("img-perrito");
console.log(imagenPerrito);


const boton = document.getElementById("boton-perrito")
console.log(boton);



//eventos asociados
boton.addEventListener("click", () => {
    console.log("Botón presionado");
    //Agregar la funcionalidad
    obtenerPerritoAleatorio(urlAleatorios)


})



//funciones
async function obtenerPerritoAleatorio(url){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos);
    console.log(datos.message); 
    console.log(datos.status); 

    imagenPerrito.src = datos.message


}

