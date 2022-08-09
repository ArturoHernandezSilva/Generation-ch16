//URL a consumir
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu"




//Elementos del DOMO
const imgPokemon = document.getElementById("img-pokemon")
console.log(imgPokemon)

const idPokemon = document.getElementById("id-pokemon");

const nombrePokemon = document.getElementById("nombre-pokemon")

console.log(nombrePokemon);


//FUNCIONES
async function obtenerPokemon(url){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    //los datos siguietnes se sacan de https://pokeapi.co/api/v2/pokemon/pikachu



    /*console.log(datos);
    console.log(datos.forms[0].name);
    console.log(datos.abilities);
    console.log(datos.id);
    console.log(datos.types);
    
    //en el siguiente ejemplo, [""] es la misma notacion que el punto. Lo pusimos porque daba error solo con el punto
    console.log(datos.sprites.other["official-artwork"].front_default); */


    const pokemon = {
    nombre: datos.forms[0].name ,
    habilidadades: datos.abilities ,
    id: datos.id ,
    tipos: datos.types ,
    imagen: datos.sprites.other["official-artwork"].front_default 


    }
    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent =`ID: ${pokemon.id}`;
    nombrePokemon.textContent = pokemon.nombre;
}

obtenerPokemon(urlPokemon)