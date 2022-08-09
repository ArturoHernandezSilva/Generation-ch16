const url = "https://dog.ceo/api/breeds/image/random"


//respuesta de la peticion
fetch(url).then((aquiescriboloquequieraporejemrespuesta) => {
    console.log(aquiescriboloquequieraporejemrespuesta);
})


//Obtener la informacion. respuesta Retorna otra promesa. then retorna los datos
//forma #1:

fetch(url)
.then((aquiescriboloquequieraporejemrespuesta) => aquiescriboloquequieraporejemrespuesta.json())
.then((datos) => {

    console.log(datos);

}).catch((error) => {
    console.log(error);
})




//forma #2:
function obtenerPerritoAleatorio(){
    try {

        const respuesta = await fetch(url);
    const datos = await respuesta.json()

    console.log(datos);

    }catch(error){


        console.log(error);
    }
}

obtenerPerritoAleatorio ()