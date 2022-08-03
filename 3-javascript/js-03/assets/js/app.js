/* Control de flujo */
/* Condicionales */
/*If*/

let condicion = "A";

if(condicion === "A"){
    /*
    codigo que se hace si se cumple la condicon A
    */
    console.log("Entro en la condicion A");

} else if (condicion === "B"){
    /*
    codigo que se hace si se cumple la condicon B
    */
    console.log("Entro en la condicion B");

}else if (condicion === "C"){
    /*
    codigo que se hace si se cumple la condicon C
    */
    console.log("Entro en la condicion C");

}else{
      /*codigo que se hace si no se cumplen anteriores */
}
    console.log("No cumple con ninguna");








    let condiccion = "false";

if(condicion === "10"){
    /*
    codigo que se hace si se cumple la condicon A
    */
    console.log("Entro en la condicion A");

} else if (condicion === "hola"){
    /*
    codigo que se hace si se cumple la condicon B
    */
    console.log("Entro en la condicion B");

}else if (condicion === "false"){
    /*
    codigo que se hace si se cumple la condicon C
    */
    console.log("Entro en la condicion C");

}else{
      /*codigo que se hace si no se cumplen anteriores */
}
    console.log("No cumple con ninguna");





function dividir (a, b){
    if (b === 0){
        console.log("No se puede realizar la operación");
    }
    else {
        console.log(a/b);
    }
}

dividir(10,2)








/* Switch */
//== ó === regresa un true si la condicion se cumple
//se utiliza pricipalmente para evaluar expresiones

let nuevaCondicion = 1;

switch(nuevaCondicion == 1) {
    case 1:
        console.log("Buenos días")
        console.log("Espero que te encuentres bien")
        break

    case "Restar":
        console.log("Nos vemos")
        break


    case true: 
        console.log("Te mando un saludo")
        break
        
    case false: 
        console.log("Te mando un saludo")
        break



    default:
        console.log("No entendí tu mensaje")
        break    
}





switch(false) {
    case 1:
        console.log("Buenos días")
        console.log("Espero que te encuentres bien")
        break

    case "Restar":
        console.log("Nos vemos")
        break


    case true: 
        console.log("Te mando un saludo")
        break
        
    case false: 
        console.log("Te mando un saludo")
        break



    default:
        console.log("No entendí tu mensaje")
        break    
}





let edad = 19;
console.log(19==20); //false
console.log(24==24);  //true


switch(false) {
    case "edad":
        console.log("Buenos días")
        console.log("Espero que te encuentres bien")
        break

    case "Restar":
        console.log("Nos vemos")
        break


    case true: 
        console.log("Te mando un saludo")
        break
        
    case false: 
        console.log("Te mando un saludo")
        break



    default:
        console.log("No entendí tu mensaje")
        break    
}





//otro ejemplo (mayor de edad)

let edade = 6

    switch(edad >= 18){
        case true:
            console.log("mayor")
            break
        
        
        case false:
            console.log("menor")
    }






//calculadora ejemplo


switch(elegir){

    case "sumar":
        console.log("Vamos a sumar");
        break

    case "restar":
        console.log("Vamos a restar");
        break

    case "dividir":
        console.log("Vamos a dividir");
        break

    case "multiplicar":
        console.log("Vamos a multiplicar");
        break

    default:
        console.log("No entiendo");
        
}







if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}





