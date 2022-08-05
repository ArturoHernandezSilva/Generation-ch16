//ejemplo
let texto = "hoy parece que va a salir el sol";
let buscar = /sol/;

// buscar es un objeto
//vamos a llamar al metodo que permita visualizar si la expresion encontro "sol":

console.log(buscar.test(texto));



//ejemplo 2
let texto01 = "la espero en el aeropuerto de LA";
let buscar01 = /LA/;
console.log(buscar01.test(texto01));




//existe otra forma de buscar. COn corchetes
let texto2 = "t marqué anch"
let buscar2 = /[eo]/;
console.log(buscar2.test(texto2));

