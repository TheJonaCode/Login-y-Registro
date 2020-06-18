//Declaracion de variables de referenia a objetos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('submit', registro);

function registro(e){
    e.prevenDefault();
    
    let nombreVal = nombre.Value;
    let emailVal = email.Value;
    let userVal = user.Value;
    let passValue = pass.Value;
    
    if(nombreVal == '' || emailVal == '' || userVal == ''|| passValue == ''){
        return;
    }

    const usuario = {
        nombre: nombreVal,
        email: emailVal,
        user: userVal,
        pass, passValue
    }
    
    localStorage.setItem('usuario', JSON.stringify(usuario));

    nombre.Value = '';
    email.Value = '';
    user.Value = '';
    pass.Value = '';

    console.log('usuario guardado');
}