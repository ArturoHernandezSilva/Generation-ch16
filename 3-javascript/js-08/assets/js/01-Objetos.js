let x = 10;
console.log(x.length);


//actividad: objeto persona e instanciar  (llamar)
let obj_persona = {
    nombre: 'Dora',
    apellido: 'la exploradora',
    edad: 10,
    correoElectronico: "doralaexp@zorro.com"
}

console.log(obj_persona);



//sin obj_
//forma habital y mas comun de declarar objetos. Abstraido
let persona = {
    nombre: 'Dora',
    apellido: 'la exploradora',
    edad: 10,
    correoElectronico: "doralaexp@zorro.com",
    nombreCompleto: function(){
        //aqui escribimos this para especificar a cual nombre (atributo) nos referimos (o sea, el nombre (atributo) que está definido en el objeto)
        return this.nombre + ' ' + this.apellido;
    }
}


//definicion de un nuevo atributo al objetopersona (tel)
persona.tel = '5551538613'


//si agrego un atributo con el mismo nombre, se reemplaza el atributo
persona.tel = '5513'


//otro atributo:
persona.tel1= '0000000'


console.log(persona);

console.log(persona.nombre);
console.log(persona.nombreCompleto());


let algo = new Object();



//for in demuestra el recorrido de los atributos. Esta es la estructura

for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}




//para ver a un objeto necesito conocerlo. transformacion del contenido de un objeto en un objeto tipo json. Regresa el objeto en forma de una cadena de caracteres
let personaString = JSON.stringify(persona);
console.log(personaString);


//metodos accesores
//para acceder a la funciomn aunque esté fuera del objeto
//metodo get y metodo set

let personas = {
    nombre: 'Juan',
    apellido: 'Fernandez',
    edad: 23,
    email:'aftfaf@jijfdjdso.com',
    idioma:'español',
    //metodo get retorna:
    get lenguaje(){
        return this.idioma.toUpperCase();
    },

    //set coloca o configura el atributo
    set (lang){
        this.idioma = lang.toLowerCase();
    }
}

console.log(personas.lenguaje);
personas.lang = '';
console.log(personas.lenguaje);
console.log(personas.idioma);