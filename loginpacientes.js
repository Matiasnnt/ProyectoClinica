document.getElementById('formularioPacientes').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let usuarioFormulario = document.getElementById('usuario').value;
    let contraseñaFormulario = document.getElementById('contrasena').value;
  
    let usuarios = localStorage.getItem('usuarios')
    if (usuarios) {
      usuarios = JSON.parse(usuarios)
      let usuarioValido = usuarios.find(usuario => usuario.usuario === usuarioFormulario && usuario.password === contraseñaFormulario);
      if (usuarioValido) {
        alert('Usuario validado');
        // Aquí redirige al usuario a panel pacientes
        window.location.href = 'pacientes.html'
      } else {
        alert('Usuario o contraseña incorrectos')
      }
    }   
  })