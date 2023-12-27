document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formularioMedicos');
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        password2: /^.{4,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/
    };

    form.addEventListener('submit', function (event) {
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
            // Obtener la especialidad seleccionada
            const especialidadSeleccionada = document.getElementById('especialidad').value;

            const medico = {};
            for (const campo of form.elements) {
                if (campo.type !== 'checkbox') {
                    medico[campo.name] = campo.value;
                }
            }

            // Agregar la especialidad al objeto medico
            medico.especialidad = especialidadSeleccionada;

            // Obtener datos actuales de localStorage o inicializar un array vacío
            const medicosGuardados = JSON.parse(localStorage.getItem('medicos')) || [];
            medicosGuardados.push(medico);

            // Almacenar el array actualizado en localStorage
            localStorage.setItem('medicos', JSON.stringify(medicosGuardados));

            // Redirigir al usuario a la página de inicio de sesión
            window.location.href = 'loginmedicos.html';

            // Limpiar el formulario después del registro exitoso
            form.reset();
        }
    });

    // Restablecer los estilos del formulario al interactuar con los campos
    form.addEventListener('input', function () {
        const inputs = form.querySelectorAll('.form-control');
        inputs.forEach(input => {
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
});
