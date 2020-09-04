/*const boton = document.querySelector('#ocboton'); //id -> #    class -> .
const footer = document.querySelector('.footer');

boton.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        //this.classList.remove('activo'); //boton
        this.textContent = 'Idioma y Moneda';
    }
    else{
        footer.classList.add('activo');
        //this.classList.add('activo'); //boton
        this.textContent = 'X Cerrar';
    }
}*/


const boton = document.querySelector('#oculta');
const div = document.querySelector('#press'); //.ocultaDiv o #press

boton.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter(){
    if(div.classList.contains('ocultaDiv')){
        div.classList.remove('ocultaDiv');
    }
    else{
        div.classList.add('ocultaDiv');
    }
}
