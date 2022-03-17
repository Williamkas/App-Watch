const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaSemana = dias[fecha.getDate()];
    let mes = meses[fecha.getMonth()];
    let dia = fecha.getDay();
    let fechaTexto = `${diaSemana}, ${dia} de ${mes}`;
    document.getElementById('fecha').innerHTML= fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar'); //Con ClassList recuperamos todas las clases que se están aplicando en este caso a elemento contenedor.
                                                                      //La función 'toggle' funciona como un interruptor, altenar la activación y desactivación del elemento interno en cada llamada. 
                                                                      //Como la función setInterval carga el reloj cada segundo, se genera una llamada de la función cada segundo, generado la alternacia del toggle.
}

const formatoHora = (hora) => {
    if(hora < 10 ){
        hora = '0'+ hora;
    }
    return hora;
}

setInterval(mostrarReloj,1000);