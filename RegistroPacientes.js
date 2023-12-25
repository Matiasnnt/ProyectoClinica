document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        celular: /^\d{10}$/ // Ajustada la expresión para aceptar 10 dígitos numéricos
    };

    const campos = {
        usuario: false,
        nombre: false,
        apellido: false,
        password: false,
        correo: false,
        celular: false
    };

    inputs.forEach(input => {
        input.addEventListener('blur', () => validarCampo(expresiones[input.name], input, input.name));
        input.addEventListener('keyup', () => validarCampo(expresiones[input.name], input, input.name));
    });

    function validarCampo(expresion, input, campo) {
        if (expresion) {
            if (expresion.test(input.value)) {
                document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
                document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
                document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
                document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
                document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
                campos[campo] = true;
            } else {
                document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
                document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
                document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
                document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
                document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
                campos[campo] = false;
            }
        }
    }

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const terminos = document.getElementById('terminos');
        if (campos.usuario && campos.nombre && campos.apellido && campos.password && campos.correo && campos.celular && terminos.checked) {
            guardarUsuarioLocalStorage();

            formulario.reset();

            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            }, 5000);

            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
    });

    function guardarUsuarioLocalStorage() {
        const nuevoUsuario = {
            usuario: document.getElementById('usuario').value,
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            password: document.getElementById('password').value,
            correo: document.getElementById('correo').value,
            celular: document.getElementById('celular').value
        };

        const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

        console.log('Usuarios en localStorage:', usuariosGuardados);
    }
});
