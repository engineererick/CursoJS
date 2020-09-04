window.addEventListener('scroll', () =>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);

    if(ubicacion.top < 400 && ubicacion.top > -45)
        console.log('visible');
    else
        console.log('no visible');
});