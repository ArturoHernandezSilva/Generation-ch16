//arreglos son coleccion de elementos
//cada elemento ocua un aposicion
//esa posicion se conoce como indice y comienza a partir de 0

let arr = [];
console.log(arr);


//propiedades - describen 
//metodos - acciones que puede realizar un objeto (arreglos)

let arre = [1, 2, 3, 4];
console.log(arre[2]);
arre[4] =190;
arre [4] = "Hola"
console.log(arre);



//métodos de arreglos
const arreglo = ["adiós"];



//()
arreglo.push(2);
arreglo.push(true);

let num = 500;

arreglo.push(num);

console.log(arreglo);



//unshift ()
//agrega elementos al inicio del arreglo
arreglo.unshift("A");
arreglo.unshift("B");
console.log(arreglo);

console.log(typeof (arreglo[4]));





//Metodos para quitar elementos
//pop ()
let dato1 = arreglo.pop();
console.log(dato1);

console.log(arreglo);



//quitar un elemenr del inico del arreglo
let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);


//splice()
//quita una parte de cualquier posicin de nuestro arreglo

arreglo.splice(1,1, "parangaricutirimiacuro", 535353);
//splice( hace 3 cosas:
    //posicion de inicio
    //cantidad de elemento a afectar,
    //elemento/S que queremos insertar)
console.log(arreglo);




//modifican el arrelgo original



//Hay otros metodos que no modifican el arreglo original
//hacen una copia, modifican esa copia


//slice ()
//Cortar partes de un arreglo
let dato3 =arreglo.slice(0, 2);


//debemos indicar un rango
//

console.log(dato3);

