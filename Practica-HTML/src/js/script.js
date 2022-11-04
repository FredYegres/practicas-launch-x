let datos = {
     nombre: '',
     telf: '',
     email: '',
     descripcion: ''
}

const nombre = document.querySelector('#nombre');
const telf = document.querySelector('#telf');
const email = document.querySelector('#email');
const descripcion = document.querySelector('#descripcion');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
telf.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
descripcion.addEventListener('input', leerTexto);

formulario.addEventListener('submit', e => {
    e.preventDefault();
    const {nombre, telf, email, descripcion} = datos;

    if(document.querySelector(".error") === null && document.querySelector(".correcto") === null) {
        if (nombre == '' || telf == '' || email == '' || descripcion == '') {
            mostrarAlerta('Todos los campos son obligatorios', 'error');
        } else {
            mostrarAlerta('Mensaje enviado correctamente', 'correcto');
        }
    }
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

function mostrarAlerta(mensaje, clase) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add(clase);
    formulario.appendChild(alerta);

    if (alerta.classList == 'correcto') {
        nombre.value = '';
        email.value = '';
        telf.value = '';
        descripcion.value = '';
        datos = {
            nombre: '',
            telf: '',
            email: '',
            descripcion: ''
       }
    }

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}