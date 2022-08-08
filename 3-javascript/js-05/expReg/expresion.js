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


//otro ejemplo

let texto3 = "aei"
let buscar3 = /[aeiou]/;
console.log(buscar3.test(texto3));



//otro ejemplo
let texto4= 395739257
let buscar4= /[1-5]/;
console.log(buscar4.test(texto4));


//ejemplo
let texto5= "los números primos son 2 3 5 7 dentro de los 10 primeros números";
let buscar5= /\d{3}/;
console.log(buscar5.test(texto5));



//ejemplo
let texto6="usuario@servidor.com";
let buscar6 =/[\w]+@{1}[\w]+\.[a-z]{2,3}/;
console.log(buscar6.test(texto6));


