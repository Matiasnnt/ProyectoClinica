document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('formularioMedicos').addEventListener('submit', function (event) {
      event.preventDefault();

      let usuarioFormulario = document.getElementById('usuario').value;
      let contraseñaFormulario = document.getElementById('contrasena').value;

      // Obtener los médicos almacenados en localStorage
      let medicosGuardados = localStorage.getItem('medicos');
      
      if (medicosGuardados) {
          medicosGuardados = JSON.parse(medicosGuardados);
          
          // Buscar si el usuario y la contraseña coinciden con algún médico registrado
          let medicoValido = medicosGuardados.find(medico => 
              medico.usuario === usuarioFormulario && 
              medico.password === contraseñaFormulario
          );

          if (medicoValido) {
              alert('Inicio de sesión exitoso');
              // Redirigir al usuario a la página del panel de médicos
              window.location.href = 'PanelMedicos.html';
          } else {
              alert('Usuario o contraseña incorrectos');
          }
      } else {
          alert('No hay médicos registrados');
      }
  });
});
