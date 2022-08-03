console.log("CASA DE TAURO");


const carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"]

console.log(carreritas);



//andrea revasa a maria
let tmp = carreritas[4];
carreritas[4] = carreritas[2];
carreritas[2] = tmp;

let tmp2 = carreritas[4];
carreritas[4] = carreritas[3];
carreritas[3] = tmp2;

console.log(carreritas);




//jose descalificado
carreritas.splice(5,1);
console.log(carreritas);



//nuevos corredores
carreritas.splice(1,0, "Cristobal", "Fernanda", "Armando");
console.log(carreritas);



//Federico en primero
carreritas.splice(0,0, "Federico");
console.log(carreritas);
