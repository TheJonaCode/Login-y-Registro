//Declaracion de variables de referenia a objetos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('submit', registro);

function registro(e){
    e.prevenDefault();
    
    let nombreVal = nombre.nodeValue;
    let emailVal = email.Value;
    let userVal = user.Value;
    let passVal = pass.Value;
    
    if(nombreVal == '' || emailVal == '' || userVal == ''|| passVal == ''){
        return;
    }

    console.log('Validando datos!');
}