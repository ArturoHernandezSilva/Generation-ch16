/*function calculadoraSueldo (sueldoIngresado) {
    let nombre = prompt("Escribe tu nombre")
    console.log(nombre);
    
    const sueldo = sueldoIngresado;
    const diasSemana = 6;
    const semanasMes = 4;
    
    console.log("Sueldo semanal: " + (sueldo * diasSemana));
    console.log("Sueldo mensual: " + (sueldo * diasSemana * semanasMes));
    

}


calculadoraSueldo (100)
calculadoraSueldo (1)
calculadoraSueldo (50) */



function calcularPorcentaje (numero, porcentaje){
    let resultado = numero * porcentaje;
    return resultado;

}

calcularPorcentaje (100, 0.4)