const { exportAllDeclaration } = require("@babel/types");
const { describe } = require("yargs");

const palindromo2 = require('..js/palindromo.js');

describe('Pruebas de la funcion palindromo', () =>
{
    test ('debe regresar "Es un palindromo" si ingresamos ojo', () => {
        let mensaje = 'Es un palindromo';
        let palabra = 'ojo';
        
        expect (palindromo (palabra)) . toBe (mensaje);
    })

    test('debe regresar "No es un palindromo" al ingrear generation ', () => {
        let mensaje = 'No es un palindromo';
        let palabra = 'generation';

        expect (palindromo (palabra)).not.toBe(mensaje)
    })

    test ('al ingresar un numero deber regresar el mensaje' , () => {
        let mensaje = 'No es un apalabra';
        let valor = 1;

        expect (palindromo (valor)).not.toBe(mensaje)
    })

});





