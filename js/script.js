const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (eventSubmit) => {

    eventSubmit.preventDefault();

    const nombre = document.getElementById('form_name').value;
    const email = document.getElementById('form_email').value;
    const sexo = document.querySelector('select[name="sexo"]').value;
    const mensaje = document.getElementById('form_message').value;

    if (nombre.length == 0) {
        alert("Nombre requerido");
        document.getElementById('form_name').focus();
        return;
    }
    if (email.length == 0) {
        alert("Email requerido");
        document.getElementById('form_email').focus();
        return;
    }
    if (mensaje.length == 0) {
        alert("Mensaje requerido");
        document.getElementById('form_message').focus();
        return;
    }

    if (sexo.length == 0) {
        alert("Sexo requerido");
        document.getElementById('form_message').focus();
        return;
    }

    const datos = {
        nombre: nombre,
        email: email,
        sexo: sexo,
        mensaje: mensaje
    };

    fetch('https://prueba-c3c0f-default-rtdb.firebaseio.com/collection.json', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
        alert("Mensaje enviado satisfactoriamente");
        console.log(datos);
    })
    .catch(error => console.error(error));
});
