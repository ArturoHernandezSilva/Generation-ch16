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










async function funcionAsincrona () {


    try{
        const datos = await obtenerDatos()
        console.log(datos);
    
    }catch(error){

    }
console.log(error);
    
}

funcionAsincrona()