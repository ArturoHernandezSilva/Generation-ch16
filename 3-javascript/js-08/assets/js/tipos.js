//tipo predefinido
let tiempo = new Date();
console.log(tiempo);
console.log(Math);



//declaramos un objeto sin clase:
let obj_literal = {
    nombre:'Juan',
    edad: 35
}




//el constructor es el primer metodo de un clase
//estamos llamado al objeto literal:
let obj_constructor = new Object();
//redefinimos un atributo  (el nombre)
//estamos modificando al objeto literal a traves del constructor
obj_constructor.nombre = 'Dora';
obj_constructor.edad= 23;
console.log(obj_literal);

//llamar al objeto a traves del constructor:
console.log(obj_constructor);


//Podriamos modificar el atributo de un objeto sin clase, sin tener que declarar un objeto constructor como en el ejemplo de arriba. Se debe al dinamismo de JavaScript. No debría ser asi. Sin embargo, podemos poner una llave para no modificar los atributos sin tener que declarar un objeto constructor. O sea, JS ofrece mecanismos de seguridad. Como la llave a continuacion:

obj_literal['nombre'];
let llave = 'nombre';
console.log('esto es con llave' + obj_literal [llave]);






//tipo cadena
alert("Hola")
//declaramos un objeto: 
//de tio cadena
//define objeto de manera primitivo
let cadena = 'Esto es una cadena'

//definición de manera clasica de unobjeto: 
//otra forma de declarar un objeto: definiendola como un objeto:
//asignamos operador new. pOrque new define a un objeto porque llama a la clase a la cual se le asigna el tipo de lo que es. La clase String define el tipo que estoy utilizando 
//define objeto a tva de contructor. el constructor es el que define de qu e tipo es. En este caso el tipo es cadena de caracteres (string)
let cadena_Obj = new String('Esto es otra cadena obj');

console.log(cadena);
console.log(cadena_Obj);


//tipo numero
let numero = 13;
let numero_obj = new Number(13.13);
console.log(numero);
console.log(numero_obj);


//tipo compuesto o unico
let lista = ['2', '3', '5', '7'];
let lista_obj = new Array ('1', '4', '6', '8', '9');
console.log(lista);
console.log(lista_obj);