const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) =>{
    if(e.target.value === '')
        console.log('falló la validación');
});