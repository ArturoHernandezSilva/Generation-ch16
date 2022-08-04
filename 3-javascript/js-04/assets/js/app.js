// for (control; ) i ++ es forma corta de escribir i = i + 1

for( let i = 1; i < 5; i++){
    console.log(i);
}

//console.log("el valor de i es"+ i)


for( let i = 0; i == 5; i++ ){
    console.log(i);
}


for( let i = 0; i < 5; i++ ){
    console.log(i);
}







//while

let control = 0 //variable de control

while(control){ //condición
    console.log(control);
    control++; //modificador
}


//no guardar lo siguiente
//let controll = 0

//while(controll < 5){
    //console.log(controll);
    //}



let control2 = 0;
while(control2 < 5){
    console.log("while: " + control2);

    control2++;
}



let control3 = true;
while(control3 === false){
    console.log("estoy trabajando");
}





  //lo siguiente no se ejecuta
let control4 = true;
while(false){
    console.log("estoy trabajando");
}




//Do... while

let numero = 0;
do{
    console.log("Do...while:" + numero);numero++;
}while(numero < 5);

//do while SE EJECUTA POR LO MENOS UNA VEZ a diferencia de while
//let numero2 = 0;
do{
    console.log("Do...while:");
}while(false);



