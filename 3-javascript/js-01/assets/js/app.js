'use strict'
lee javascript de forma estricta



// tipos de datos


// tipos de variables

let a; //local
const b = 0; //constante y local
var c; //global


/* Tipos de datos */
// string
let cadena = "Hola Mundo";


// Number
let numero = 5;
let numero = 5.1;
let numero = -3.44;


//boolean
let booleano = true;
let booleano = false;


//undefined - indefinado
let variable;
console.log(variable + 5);


//null
let vacio = null;
// console.log(vacio);



//NaN - Not a Number
//tratar de realizar alguna operacion aritmetica con algun dato que no es un numero

/*
Scope - contexto
espacio en el que vive la varible
*/


/* Plantillas literales
    template strings
    literal strings
    */

console.log(`Esta es una cadena ${5 + 4}`);
console.log("Esta es una cadena normal ${5+4}");

let nombre = `Arturo`;


//Let presentación = ``;
console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);



console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`); 


/* Arreglos - matrices -arrays */
let arr = [1, "A", null, undefined, [true,false]];


//notación de corchetes
console.log(arr[4][0]);

if (arr.length >= 5) {
    console.log("tiene mas de 5 elementos");
}

if (arr[4][0] === true){
    console.log("es verdad");
}





let arr2 = new Array("B", 2);
console.log(arr2);



/*Objetos*/
//clave / valor

const persona = { 
    nombre:'Arturo',
    edad:31
    hobbies: [
        "Leer", 
        "ver sherk 1 y 2",
        "comer"
    ],
    auto:{
        marca: "VW",
        modelo: "pointer",
        year: 2000,

    },
    saludar: function (){
        return "Hola"
    }
};



persona.nombre ="panchito"

//Notación de punto
console.log(persona.nombre);

//lo que sigue e igual  a lo anterior
console.log(`Mi nommbre es ${persona.nombre}`)


console.log(`Mi hobbie favorito es ${persona.hobbies[1]}`);



console.log(`La marca de mi carro es ${persona.auto.marca}`);

console.log(`La accion que realizo es: ${persona.saludar()}`);




//arreglo de objetos
[{}, {}, {}]




