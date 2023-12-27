// Valida que este seleccionado especialidad y la hora
function validar() {
    let especialidad = document.getElementById("especialidad").value
    let hora = document.getElementById("hora").value

    // Verifica si se selecciono una especialidad y un horario
    if (especialidad == 0 && hora == 0) {
        alert("Debe seleccionar una especialidad y el horario")
        return
    }
    // Verifica si se selecciono una especialidad
    if (especialidad == 0) {
        alert("Debe seleccionar una especialidad")
        return
    } 
    // Verifica si se selecciono un horario
    if (hora == 0) {
        alert("Debe seleccionar un horario")
        return
    }
}

// Listado de médicos con su especialidad y horarios ("1" para mañana y "2" para tarde)
const medicos = [
    { nombre: 'Medico 1', especialidad: '1', horarios: ['1', '2'] }, 
    { nombre: 'Medico 2', especialidad: '2', horarios: ['1', '2'] },
    { nombre: 'Medico 3', especialidad: '3', horarios: ['1', '2'] }, 
    { nombre: 'Medico 4', especialidad: '4', horarios: ['1', '2'] }, 
    { nombre: 'Medico 5', especialidad: '5', horarios: ['1', '2'] }, 
    { nombre: 'Medico 6', especialidad: '6', horarios: ['1', '2'] }, 
    { nombre: 'Medico 7', especialidad: '7', horarios: ['1', '2'] },

  ]

  // Escucha los cambios en los campos de especialidad y hora
  document.getElementById('especialidad').addEventListener('change', actualizarMedicosDisponibles)
  document.getElementById('hora').addEventListener('change', actualizarMedicosDisponibles)
  
  function actualizarMedicosDisponibles() {
    let especialidadSeleccionada = document.getElementById('especialidad').value
    let horaSeleccionada = document.getElementById('hora').value
  
    // Si la especialidad y el horario están seleccionados
    if (especialidadSeleccionada !== '' && horaSeleccionada !== '') {
      // Filtrar los médicos basándose en la especialidad y el horario seleccionados
      let medicosFiltrados = medicos.filter(medico =>
        medico.especialidad === especialidadSeleccionada && medico.horarios.includes(horaSeleccionada)
      )

      let selectMedico = document.getElementById('agregarMedico')
  
      // Limpia el campo select de médicos disponibles
      selectMedico.innerHTML = ''      
  
      // Agrega los médicos filtrados al campo select de médicos disponibles
      for (let medico of medicosFiltrados) {
        let option = document.createElement('option')
        option.text = medico.nombre
        option.value = medico.nombre
        selectMedico.add(option)
      }
      // Guarda los datos en el localStorage
      let datos = {
        especialidad: especialidadSeleccionada,
        hora: horaSeleccionada,
        medicos: medicosFiltrados
      }
      localStorage.setItem('datos', JSON.stringify(datos))
    }
  }

  // Previene el envío del formulario y verifica si estan seleccionados los campos 
  document.getElementById('formCita').addEventListener('submit', function(event) {
    event.preventDefault()

    let selectMedico = document.getElementById('agregarMedico')
    let campoTexto = document.getElementById('exampleFormControlTextarea1')

    // Verifica si se selecciono un médico
    if (selectMedico.value === '') {
        alert('Por favor, seleccione un médico disponible.')
        return
    }

    // Verifica si el campo de texto está vacío
    if (campoTexto.value.trim() === '') {
        alert('Por favor, complete el campo de consulta.')
        return
    }

    // Mensaje de éxito
    alert('La cita ha sido programada con éxito.')

    // Limpia el formulario
    this.reset()
})

// Mostrar el turno seleccionado

// Obtener el elemento de la tabla
let tabla = document.getElementById('tablaTurnos')

// Obtener los datos de localStorage
let datos = JSON.parse(localStorage.getItem('datos'))

// Limpiar la tabla
tabla.innerHTML = ''

// Verificar si hay datos
if (datos) {
    // Crear las filas de la tabla
    let fila = `<tr>
                    <td>${datos.medicos}</td>
                    <td>${datos.especialidad}</td>
                    <td>${datos.hora}</td>
                </tr>`;

    // Agrega la fila a la tabla
    tabla.innerHTML = fila;
} else {
    // Muestra un mensaje si no hay datos
    tabla.innerHTML = '<tr><td colspan="3">No hay datos disponibles.</td></tr>';
}

