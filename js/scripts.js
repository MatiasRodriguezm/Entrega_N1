function mensaje() {
    alert('hola mundo');
}

function validarFormulario() {

    resp = validarFecha();
    if (resp==false) {
        return false;

    }
    return true;
}

function validarFecha() {
    var fechaUsuario = document.getElementById('txtFechaNaci').value;
    var fechaSistema = new Date();
    console.log('Fecha Usuario:'+fechaUsuario);
    console.log('Fecha Sistema:'+fechaSistema);
    //////////////////////////////// 2021-04-01
    var ano = fechaUsuario.slice(0,4);
    var mes = fechaUsuario.slice(5,7);
    var dia = fechaUsuario.slice(8,10);
    var fechaNuevaUsuario = new Date(ano,(mes-1),dia);
    console.log('Nueva Fecha:'+fechaNuevaUsuario);
    //////////////////////////////////
    if ( fechaNuevaUsuario > fechaSistema) {
        alert('la fecha no puede ser futura');
        return false;
    }

    
}
