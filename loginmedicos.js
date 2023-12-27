document.getElementById('formularioMedicos').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let usuarioFormulario = document.getElementById('usuario').value;
    let contraseñaFormulario = document.getElementById('contrasena').value;
  
    let usuarios = localStorage.getItem('usuarios')
    if (usuarios) {
      usuarios = JSON.parse(usuarios)
      let usuarioValido = usuarios.find(usuario => usuario.usuario === usuarioFormulario && usuario.password === contraseñaFormulario);
      if (usuarioValido) {
        alert('Usuario validado');
        // Aquí redirige al usuario turnos medicos
        window.location.href = 'PanelMedicos.html'
      } else {
        alert('Usuario o contraseña incorrectos')
      }
    }   
  })