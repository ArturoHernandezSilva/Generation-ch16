const palindromo = (palabra) => {
    return palabra.split("").reverse().join("");
}



console.log(palindromo ('Generation'));



//ejemplo
const palindromo2 = (palabra2) => {
    if(typeof palabra2 === 'number'){
        return 'No es una palabra';
    }
    let palabrainvertida = palabra2.split("").reverse().join("");

    if(palabra2 === palabrainvertida){
        return 'Es un palindromo'
    }else{
        return 'No es un palindromo'
    }
}

console.log(palindromo2('ojo'))




//operador ternario


const palindromo3 = (palabra3) => {
    let palabraInvertida3 = palabra3.split("").reverse().join("");

    if(palabra3 === palabraInvertida3){
        return 'Es un palindromo'
    }else{
        return 'No es un palindromo'
    }
}


return palabra3 === palabraInvertida3 ? 'Es un palindromo' : 'No es un palindromo'

console.log(palindromo3('generation'));

module.exports = palindromo2;


//operador elvis
//(condicion) ? verdadera : falsa
//(condicion) ? if : else
//console.log()









/*let palabra = "generation";

palabra.split()

palabra.split("")

let arr = palabra.split("")

arr.reverse()

arr.reverse().join*/

console.log(palindromo(1));

