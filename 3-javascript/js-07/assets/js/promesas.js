
const saludo = "Hola mundo"

const datos = [
                {
                    nombre: "Arturo",
                    apellido: "Hernandez"
                },
                {
                    nombre: "Arturo",
                    apellido: "Hernandez"
                },
                {
                    nombre: "Arturo",
                    apellido: "Hernandez"
                },    
            ]

//funcion para simular un apeticion
//retorna indefinido aunque sea de cero secs. Si quitamos el settimeout se mues
function obtenerDatos2(){
    setTimeout( () => {
        return datos;
    }, 0)
}

console.log(obtenerDatos2 ());



//promesa:
function obtenerDatos(){
    return new Promise ( (resolve, reject) => {


    setTimeout( () => {
        resolve(datos)
    }, 2000)
})
}


//console.log(obtenerDatos ());


obtenerDatos().then((datos) => {
    console.log(datos);
})





//promesa
function obtenerDatos(){
    return new Promise ( (resolve, reject) => {


    setTimeout( () => {
        if(false){
        resolve(datos)
        } else {
            reject("Nunca te quiso")
        }
    }, 2000)
})
}


//console.log(obtenerDatos ());


obtenerDatos().then((datos) => {
    console.log(datos);
})





//promesa con catch
//cambiar true por false y observar en la consola

function obtenerDatos(){
    return new Promise ( (resolve, reject) => {


    setTimeout( () => {
        if(false){
        resolve(datos)
        } else {
            reject("Nunca te quiso")
        }
    }, 2000)
})
}


//console.log(obtenerDatos ());


//forma #1
obtenerDatos().then((datos) => {
    console.log(datos);

}). catch ((error) =>{
    console.log("Existe un error en la petición 1")
    console.log(error);
})






//forma #2 -Funciones asincronas - await async. "datos" es una promesa sin el await. Con el await ya no es tipo promesa. 

async function funcionAsincrona () {
    const datos = await obtenerDatos()
    console.log(datos);
}

funcionAsincrona()






//el bloque try catch resuleve una promesa no cumplida de un afuncion asincrona

async function funcionAsincrona () {


    try{
        const datos = await obtenerDatos()
        console.log(datos);
    
    }catch(error){

    }
console.log(error);
    
}

funcionAsincrona()