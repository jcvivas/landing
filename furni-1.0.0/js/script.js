const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (eventSubmit) =>{

    eventSubmit.preventDefault();


    

    const nombre = document.getElementById('form_name').value;
    const email = document.getElementById('form_email').value;
    const mensaje = document.getElementById('form_message').value;
    if (form_name.value.length == 0) {
        alert("Nombre requerido")
        form_name.focus()
        return;
    }
    if (form_email.value.length == 0) {
        alert("Nombre requerido")
        form_email.focus()
        return;
    }
    if (form_message.value.length == 0) {
        alert("Nombre requerido")
        form_email.focus()
        return;
    }
    const datos = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    fetch('https://prueba-c3c0f-default-rtdb.firebaseio.com/collection.json', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(respuesta=> respuesta.json())
    .then(datos => {
        console.log(datos);
    })
    .catch(error => console.error(error));
})

