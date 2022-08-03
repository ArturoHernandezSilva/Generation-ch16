function miFuncion(a, b){
    return (a + b);
}
let resultado = miFuncion( 3, 6);
console.log("El resultado es: " + resultado);





//funcion expresion o anonima (no tiene nombre) (fijarse en el punto y coma):
let suma = function (a, b) {
    return (a + b)
}; 

//asi se invoca a la funcion anonima:
let res = suma (2, 3);  

console.log("La suma es : " + res);





//funcion expresion o anonima (no tiene nombre) (fijarse en el punto y coma):
let suma2 = function (a, b) {
    return (a + b)
}; 

//asi se invoca a la funcion anonima:
resultado = suma2 (2, 3);  
let caracteres = "la suma es : "

console.log(caracteres + resultado);





//ejercicio
let resta = function (a, b) {
    return(a - b)
};

resultado = resta (10, 3.5)
let rest = "la resta es :"
console.log(rest + resultado);





let mult = function (a, b){
    return (a * b)
};

resultado = mult (2.53, 4.12)
let multi = "la multiplicación es "
console.log(multi + resultado);



let divis = function (a, b){
    return (a / b)
}

resultado = divis (2.53, 4.23)
let divisi = "la división es "
console.log (divisi + resultado);





//funcion autollamada self invoking (es anonima)

(function (a, b){
    console.log("El resultado de self invoking es: " + (a + b));
})(3, 4);
















