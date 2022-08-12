//URL a consumir
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"




//Elementos del DOMO
const imgPokemon = document.getElementById("img-pokemon")
console.log(imgPokemon)

const idPokemon = document.getElementById("id-pokemon");

const nombrePokemon = document.getElementById("nombre-pokemon")

console.log(nombrePokemon);

const listaHabilidades = document.getElementById("Lista-habilidades")

const listaTipos = document.getElementById("lista-tipos")

const formulario = document.getElementById("buscador-pokemon")
console.log(formulario);



//Eventos
//e.preventdefault detiene la accion del submit. 
//console boton es para ver que la accion esta funcionando. en la consola aparece la leyenda boton.
//.value es para ver la info que metemos al imput del buscador. (LO quebuscamos)
formulario.addEventListener("submit", (e) => {e.preventDefault ()
    console.log("Boton");

    const inputPokemon = document.getElementById("busqueda-pokemon")
    console.log(inputPokemon.value)


    const nuevaBusqueda = urlPokemon + inputPokemon.value

    console.log(nuevaBusqueda);

    obtenerPokemon(nuevaBusqueda)

})



//FUNCIONES
async function obtenerPokemon(url){
   try {
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
    habilidades: datos.abilities ,
    id: datos.id ,
    tipos: datos.types ,
    imagen: datos.sprites.other["official-artwork"].front_default 


    }
    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent =`ID: ${pokemon.id}`;
    nombrePokemon.textContent = pokemon.nombre;


    //Imagen, nombre y ID
    imgPokemon.src= pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.id}`;
    nombrePokemon.textContet = pokemon.nombre;

    //habilidades
    console.log(pokemon.habilidades);

    let templatehabilidades =  ``


    for(let i=0; i < pokemon.habilidades.length; i++){
        const nombreHabilidad = pokemon.habilidades[i].ability.name
        console.log(nombreHabilidad);


//+= para que no se sobreescriba el codigo. Que se vaya guardando. += templatehabilidades. Pero lo borramos porque sumaba habilidades al momento de buscar
        templatehabilidades+= `<li class="list-group-item">${nombreHabilidad}</li>`

    }

    listaHabilidades.innerHTML = templatehabilidades;
    



//tipos    
console.log(pokemon.tipos);

let templatetipos = ""

pokemon.tipos.forEach((tipo) => {
    
    const nombreTipo = tipo.type.name;
    console.log(tipo.type.name);
    templatetipos += `<li class="list-group-item">${nombreTipo}`
})


listaTipos.innerHTML = templatetipos;
   } catch (e) {
    alert("pokemon no valido")
   }

}
