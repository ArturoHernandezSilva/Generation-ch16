//aqui es el tema de funciones como objetos
// las propiedades acontinuacion son a, b y res=0
 /*los parametros (o variables) son la lista de propiedades que se implementan a esta funcion*/
 /*res = 0 espropiedad*/ 
 /* res = (a*b) es acción, utilidad o proceso*/


function miFuncion (a, b){  
    let res = 0; 
    res = (a * b)  
    return res;
}


console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);