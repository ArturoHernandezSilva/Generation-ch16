const num =10;

console.log(1);

console.log(2);
//delay para la ejecución (setTimeout): 
setTimeout( () => {
    console.log("Hola");
}, 2000)



//aunque la siguiete accion es de cero secs, la ejecuta al final
console.log(3);
setTimeout( () => {
    console.log("Adiós");
}, 0)

//no guargar lo siguiente. es ejemplo de accion que tarda pero se espera a que se ejecute
//for(let i=0); i<5000; i++{
//    console.log("Estoy procesando")
//}

console.log(4);

console.log(5);