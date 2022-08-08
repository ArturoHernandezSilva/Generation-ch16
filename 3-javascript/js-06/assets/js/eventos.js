//manejador de datos
function saludar(){
    alert('Hola');
}


//forma mas moderna: addeventlistener ()
const boton = document.getElementById('boton');
console.log(boton);


boton.addEventListener('click', (evento) => {
    alert('hola')
    console.log(evento.target);
});


const formulario = document.getElementById('form');

formulario.addEventListener('submit', (e) => { 
    e.preventeDefault();
    console.log(formulario[0].value);
    alert(formulario[0].value);
})
