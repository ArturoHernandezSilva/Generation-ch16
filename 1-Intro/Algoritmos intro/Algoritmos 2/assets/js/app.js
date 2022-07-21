
function saludar () {
    console.log("Hola mundo")
}

//saludar();

//Arreglos

let num = [];
console.log(num);

let arr1 = new Array();
console.log(arr1);


//usar un arreglo

const arr = [1,2,3,4,5];
console.log(arr );

//notación de corchetes []
console.log(arr[3]);

arr[5] = 25;
arr[6] = 8;
arr[6] = 0

//arr[7] = undefined
//arr[8] = undefined
//arr[9] = undefined

arr[10] = 40;

//se pueden agregar valores más adelante
arr[7] = 9;

console.log(arr);


//Propiedades de los arreglos
//Descripción de nuestro arreglo
console.log(arr.length);

//Metodos
//acciones que puede realizar un arrglo

const frutas = ["Manzana", "Plátano"];
console.log(frutas);

//push()
//agrega un valor al final del arreglo

frutas.push("Naranja");
console.log(frutas);


let fruta = "Toronja";
frutas.push(fruta);
console.log(frutas);


//pop()
//quita un elemento del final del arreglo
let elementoBorrado = frutas.pop ();
frutas.pop();
console.log(frutas);

console.log(elementoBorrado)


//unshift ()
//agrega un elemento al inicio del arreglo

frutas.unshift ("Uva", "Pera");
console.log(frutas);

let devolver = frutas.unshift ("Mandarina")
console.log(frutas);
console.log(devolver);



//shift
//elimina un elemento del inicio de un arreglo
 
frutas.shift();
frutas.shift();
console.log(frutas);

let frutaQuitada = frutas.shift();
console.log(frutas);
console.log (frutaQuitada);



