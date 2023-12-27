document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formularioPacientes');
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        password2: /^.{4,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        celular: /^\d{7,14}$/
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validación de campos con expresiones regulares
        for (const campo in expresiones) {
            const input = document.getElementById(campo);
            const valor = input.value.trim();

            if (!expresiones[campo].test(valor)) {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        }

        // Validación de contraseña repetida
        const password = document.getElementById('password').value.trim();
        const password2 = document.getElementById('password2').value.trim();
        const inputPassword2 = document.getElementById('password2');
        if (password !== password2 || password2 === '') {
            inputPassword2.classList.remove('is-valid');
            inputPassword2.classList.add('is-invalid');
        } else {
            inputPassword2.classList.remove('is-invalid');
            inputPassword2.classList.add('is-valid');
        }

        // Validación de checkbox de términos y condiciones
        const checkboxTerminos = document.getElementById('terminos');
        if (!checkboxTerminos.checked) {
            checkboxTerminos.classList.add('is-invalid');
        } else {
            checkboxTerminos.classList.remove('is-invalid');
        }

        // Si todas las validaciones son exitosas, guardamos los campos en localStorage
        if (form.checkValidity() && !form.querySelector('.is-invalid')) {
            const usuario = {};
            for (const campo of form.elements) {
                if (campo.type !== 'checkbox') {
                    usuario[campo.name] = campo.value;
                }
            }

            const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuariosGuardados.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

            // Puedes redirigir a otra página o realizar otras acciones después del registro exitoso
            alert('Registro exitoso');
        }
    });

    // Mostrar y ocultar mensajes de error al interactuar con los campos
    const inputs = form.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            const campo = input.id;
            const valor = input.value.trim();

            if (!expresiones[campo].test(valor)) {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        });
    });

    // Mostrar y ocultar mensaje de error del checkbox al interactuar con él
    const checkboxTerminos = document.getElementById('terminos');
    checkboxTerminos.addEventListener('change', function() {
        if (!checkboxTerminos.checked) {
            checkboxTerminos.classList.add('is-invalid');
        } else {
            checkboxTerminos.classList.remove('is-invalid');
        }
    });

    // Validación de contraseña repetida en tiempo real
    const inputPassword2 = document.getElementById('password2');
    inputPassword2.addEventListener('input', function() {
        const password = document.getElementById('password').value.trim();
        const password2 = inputPassword2.value.trim();

        if (password !== password2 || password2 === '') {
            inputPassword2.classList.remove('is-valid');
            inputPassword2.classList.add('is-invalid');
        } else {
            inputPassword2.classList.remove('is-invalid');
            inputPassword2.classList.add('is-valid');
        }
    });
});
