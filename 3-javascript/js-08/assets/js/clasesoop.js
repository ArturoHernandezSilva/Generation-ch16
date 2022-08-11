//para definir un objeto persona hay que llamar al construcot. En buenas practicas el construcotr debe llevar el mism nombre de la clase

//variable name no esta declarada, pero podemos llamarla con this. Porque hay una clase y por lo tanto debe haber un objeto. El constructor es la clase. Es como si tuvieramos escrito let nombre dentro de class Persona. 

//metodos que nos permiten acceder a los atributos: get y set

class Persona {

    constructor(nombre, apellido) {
        //nombre hace referencia al nombre que esta aca arriba. Apellido igual. Name y last name son las variables no declaradas. 
        this.name = nombre;
        this.lastname = apellido;
    }
    //huin bajo es par aahcer publico un atributo
    get nombre (){
        return this._nombre;
    }
    set _nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona ('jose', 'perez');
console.log(persona1);


persona1.nombre = 'Hugo Sanchez';
console.log(persona1.nombre);

let persona2 = new Persona('Cruz', 'Ana');
console.log(persona2);