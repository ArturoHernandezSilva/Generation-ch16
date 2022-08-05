//sort()
//ordenar los elementos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort();

console.log(arr);


const arr2 = ["Hola", "adios", "bienvenido", "Calle"];

arr2.sort();

console.log(arr2);



//arregla segun el primer caracter
const arr3 = [5, 1231, 567, 1, 80];

arr3.sort();


console.log(arr3)





console.log(sumar(5, 7))
//función declarada
//hoisting: un proceso de reacomodo automatico del codigo. aunque el console log de sumar esta arriba, se lee la funcion que essta abajo
function sumar(a, b){
    return a + b;
}


//otro ejemplo:
console.log(a);
let a = 2;





//funcion expresada
//se puede guardar dentro de una variable
// se podria decir quee s aninima pero no lo es
//aqui el hoisting no funciona a diferencia de la funcion declarada

const multiplicar = function (a, b){
    return a*b;
}

console.log(multiplicar(3, 5));



//funciones flecha
//forma mas sencilla de escribir la funcion
const dividir = (a,b) => {
    return a / b;
}

console.log(dividir(10, 2));



//si solo vamos  aregresar una cosa podemos escribir, en vez d elo de arriba

const dividir2 = (a, b) => a / b;
console.log(dividir(10, 2));



//otro ejemplo ()ordenamiento de burbuja)
arr3.sort((a,b) => a -b); //oredena numeros de menor a mayor
console.log(arr3)

//al reves que el anterior
arr3.sort((a, b) => b - a); //ordena numero de mayor a meor
console.log(arr3)





//metodo for each
//es un ciclo qu erecorre en automatico todo nuestro arreglo
//lenght regresa cantidad de elementos que hay en el arreglo
const arrNumeros = [1,4,6,8,10,20,30];
for (let i=0; i< arrNumeros.length; i++){
    arrNumeros[i] = arrNumeros[i] * 2;
}

console.log(arrNumeros);


//si comentamos el for y console de arriba y escribimos esto
//forEach(elemento, indice,arreglo completo)
arrNumeros.forEach((elemento, index) => console.log(elemento, index))



//otro ejemplo
arrNumeros.forEach((elemento) =>
    console.log(elemento *=2)
);


// (elemento *=2) es igual que escribir elemento=elemento * 2