
    // Función para cargar los turnos de pacientes en la tabla
    function cargarTurnosPacientes(turnos) {
        const turnosPacientesBody = document.getElementById('turnosPacientesBody');
        turnosPacientesBody.innerHTML = '';

        turnos.forEach(turno => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${turno.paciente}</td>
                <td>${turno.fecha}</td>
                <td>${turno.hora}</td>
            `;
            turnosPacientesBody.appendChild(fila);
        });
    }

    // Función para buscar turnos por el nombre del médico
    function buscarTurnosMedico() {
        const nombreMedico = document.getElementById('nombreMedico').value;
        const turnosFiltrados = turnosPacientes.filter(turno => turno.medico.includes(nombreMedico));
        cargarTurnosPacientes(turnosFiltrados);
        if (turnosFiltrados.length > 0) {
            cargarTurnosPacientes(turnosFiltrados);
        } else {
            alert('No se encontraron turnos para el médico ingresado.');
        }
    }

    

    // Llamada a la función para cargar los turnos de pacientes al cargar la página
    cargarTurnosPacientes(turnosPacientes);

